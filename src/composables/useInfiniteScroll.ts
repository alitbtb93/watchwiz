import { onMounted, onBeforeUnmount, ref, unref, type MaybeRef } from 'vue';

export function useInfiniteScroll(
  element: MaybeRef<Element | null>,
  callback: () => void,
  options?: IntersectionObserverInit
) {
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        callback();
      }
    }, options);

    unref(element) && observer.value.observe(unref(element) as Element);
  });

  onBeforeUnmount(() => {
    observer.value && observer.value.disconnect();
  });
}

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getShows } from '@/api/publicApi';
import type { Show } from '@/api/types';

const shows = ref<Array<Show>>([]);
const page = ref(1);

onMounted(() => fetchShows(page.value));

async function fetchShows(page: number) {
  try {
    const { data } = await getShows(page);
    shows.value = data;
  } catch (error) {
    console.log(error);
  }
}
</script>

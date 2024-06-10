import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import BaseImageLoader from './BaseImageLoader.vue';

describe('ImageLoader component test', () => {
  it('should render img tag when there is src', () => {
    const wrapper = mount(BaseImageLoader, {
      props: { src: 'test' }
    });
    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  it.only('should render placeholder when there is  no src', () => {
    const wrapper = mount(BaseImageLoader, {
      props: { src: undefined }
    });
    expect(wrapper.find('[data-testId=placeholder-image]').exists()).toBeTruthy();
  });
});

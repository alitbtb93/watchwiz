import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import BaseGenreLabel from './BaseGenreLabel.vue';

describe('BaseGenreLabel component test', () => {
  it('should render genre if it is there', () => {
    const wrapper = mount(BaseGenreLabel, {
      props: { genre: 'test' }
    });
    expect(wrapper.find('[data-testId=show-genre]').text()).toEqual('test');
  });
});

import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import AppGenreLabel from './AppGenreLabel.vue';

describe('AppGenreLabel component test', () => {
  it('should render genre if it is there', () => {
    const wrapper = mount(AppGenreLabel, {
      props: { genre: 'test' }
    });
    expect(wrapper.find('[data-testId=show-genre]').text()).toEqual('test');
  });
});

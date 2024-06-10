import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import BaseContainer from './BaseContainer.vue';

describe('BaseContainer component test', () => {
  it('should render loading state when isLoading is true', () => {
    const wrapper = mount(BaseContainer, {
      props: { isLoading: true }
    });
    expect(wrapper.find('[data-testId=loading-state]').exists()).toBeTruthy();
  });

  it('should render error message when isLoading is false and there is a error message', () => {
    const errorMessage = 'Test error message';
    const content = 'Test content';
    const wrapper = mount(BaseContainer, {
      props: { errorMessage: errorMessage, isLoading: false },
      slots: { default: content }
    });
    expect(wrapper.find('[data-testId=loading-state]').exists()).toBeFalsy();
    expect(wrapper.text()).contain(errorMessage);
    expect(wrapper.text()).not.contain(content);
  });

  it('should render content when isLoading is false and there is no error message', () => {
    const content = 'Test content';
    const wrapper = mount(BaseContainer, {
      props: { isLoading: false },
      slots: { default: content }
    });
    expect(wrapper.find('[data-testId=loading-state]').exists()).toBeFalsy();
    expect(wrapper.text()).contain(content);
  });
});

import { mount } from '@vue/test-utils';
import { describe, it, vi, type Mock } from 'vitest';
import AppHeaderSearch from './AppHeaderSearch.vue';

const mockPush: Mock = vi.fn();

vi.mock('vue-router', () => ({
  useRouter: (): { push: Mock } => ({
    push: mockPush
  })
}));

describe('AppHeaderSearch component test', () => {
  it('should redirect user to search page with correct query when user clicks on the search button', async () => {
    const wrapper = mount(AppHeaderSearch);
    await wrapper.find('input').setValue('Test');
    await wrapper.find('button').trigger('click');
    expect(mockPush).toHaveBeenCalledWith('/search/Test');
  });
});

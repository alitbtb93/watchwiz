import { shallowMount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import AppCard from './AppCard.vue';
import { showMock } from '@/mocks/showMock';
import { formatDate } from '@/utils/formatDate';

describe('AppCard component test', () => {
  it('should show information based on show info', () => {
    const wrapper = shallowMount(AppCard, {
      props: {
        show: showMock
      }
    });
    expect(wrapper.find('[data-testId=show-name]').text()).toEqual(showMock.name);
    expect(wrapper.find('[data-testId=show-dates]').text()).toContain(
      formatDate(showMock.premiered)
    );
    expect(wrapper.find('[data-testId=show-rate]').text()).toEqual(
      showMock.rating.average.toString()
    );
  });
});

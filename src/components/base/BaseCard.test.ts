import { shallowMount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import BaseCard from './BaseCard.vue';
import { showMock } from '@/mocks/showMock';
import { formatDate } from '@/utils/formatDate';

describe('BaseCard component test', () => {
  it('should show information based on show info', () => {
    const wrapper = shallowMount(BaseCard, {
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

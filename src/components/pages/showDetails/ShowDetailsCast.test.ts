import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import ShowDetailsCast from './ShowDetailsCast.vue';
import { showCastMock } from '@/mocks/showCastMock';

describe('ShowDetailsCast component test', () => {
  it('should show cast information', () => {
    const wrapper = mount(ShowDetailsCast, {
      props: { item: showCastMock }
    });
    expect(wrapper.find('[data-testId=cast-name]').text()).toEqual(showCastMock.person.name);
    expect(wrapper.find('[data-testId=cast-character-name]').text()).toEqual(
      showCastMock.character.name
    );
  });
});

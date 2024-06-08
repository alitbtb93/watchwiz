import apiRequest from '@/utils/apiRequest';
import type { Show } from './types';

export function getShows(page: number) {
  return apiRequest.get<Array<Show>>('/shows', { params: { page } });
}

export function getShowInfo(id: number) {
  return apiRequest.get<Show>(`/shows/${id}`);
}

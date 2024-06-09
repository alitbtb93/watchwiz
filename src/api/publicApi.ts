import apiRequest from '@/utils/apiRequest';
import type { Show, SearchResult, ShowCast } from './types';

export function getShows(page: number) {
  return apiRequest.get<Array<Show>>('/shows', { params: { page } });
}

export function getShowInfo(id: number) {
  return apiRequest.get<Show>(`/shows/${id}`);
}

export function searchShow(query: string) {
  return apiRequest.get<Array<SearchResult>>('/search/shows', { params: { q: query } });
}

export function getShowCast(id: number) {
  return apiRequest.get<Array<ShowCast>>(`/shows/${id}/cast`);
}

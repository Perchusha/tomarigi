import { getHeaders } from './requests';
import { IBaseBody } from '../types';

export const fetchBase = async (resource: string, { method = 'GET', params }: IBaseBody) => {
  return fetch(resource, {
    method,
    body: method !== 'GET' ? JSON.stringify(params) || null : null,
    headers: getHeaders(),
  }).then(response => {
    return response.json();
  });
};

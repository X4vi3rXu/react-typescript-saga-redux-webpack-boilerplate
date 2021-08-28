import request from '#/utils/request';
import { AxiosResponse } from 'axios';

export function getExample() {
  return request({
    url: `/something/api/path`,
  })
    .then((result: AxiosResponse) => result)
    .catch(() => []);
}

export function postExample() {
  return request({
    method: 'POST',
    url: `/something/api/path`,
    data: {},
  })
    .then((result: AxiosResponse) => result)
    .catch(() => []);
}

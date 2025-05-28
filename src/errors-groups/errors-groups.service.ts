import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import { ErrorGroupEntity } from '../shared/interfaces/errors.interface';
import { GetErrorGroupsQueryDto } from './dto';

@Injectable()
export class ErrorsGroupsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(query: GetErrorGroupsQueryDto, auth: string) {
    return request<ErrorGroupEntity[]>(() =>
      this.httpService.get(`${BASE_URL}/v1/error-groups`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request<ErrorGroupEntity>(() =>
      this.httpService.get(`${BASE_URL}/v1/error-groups/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

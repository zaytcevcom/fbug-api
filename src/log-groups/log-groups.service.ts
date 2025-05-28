import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import { LogGroupEntity } from '../shared/interfaces/logs.interface';
import { GetLogGroupsQueryDto } from './dto';

@Injectable()
export class LogGroupsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(query: GetLogGroupsQueryDto, auth: string) {
    return request<LogGroupEntity[]>(() =>
      this.httpService.get(`${BASE_URL}/v1/log-groups`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request<LogGroupEntity>(() =>
      this.httpService.get(`${BASE_URL}/v1/log-groups/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

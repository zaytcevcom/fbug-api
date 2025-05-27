import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateLogGroupDto, UpdateLogGroupDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';

@Injectable()
export class LogGroupsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(params: any, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/log-groups`, {
        params,
        headers: { Authorization: auth },
      }),
    );
  }

  async create(dto: CreateLogGroupDto, auth: string) {
    return request(() =>
      this.httpService.post(`${BASE_URL}/v1/log-groups`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/log-groups/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async update(id: string, dto: UpdateLogGroupDto, auth: string) {
    return request(() =>
      this.httpService.put(`${BASE_URL}/v1/log-groups/${id}`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async delete(id: string, auth: string) {
    return request(() =>
      this.httpService.delete(`${BASE_URL}/v1/log-groups/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

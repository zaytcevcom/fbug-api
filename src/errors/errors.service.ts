import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  UpdateErrorDto,
  GetErrorsQueryDto,
  GetErrorStatsQueryDto,
  CreateErrorDto,
} from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';

@Injectable()
export class ErrorsService {
  constructor(private readonly httpService: HttpService) {}

  async ingest(projectId: string, key: string, dto: CreateErrorDto) {
    return request(() =>
      this.httpService.post(
        `${BASE_URL}/ingest/${projectId}:${key}/errors`,
        dto,
      ),
    );
  }

  async getAll(query: GetErrorsQueryDto, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/errors`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getStats(query: GetErrorStatsQueryDto, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/errors/stats`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getOne(id: string, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/errors/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async update(id: string, dto: UpdateErrorDto, auth: string) {
    return request(() =>
      this.httpService.put(`${BASE_URL}/v1/errors/${id}`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async delete(id: string, auth: string) {
    return request(() =>
      this.httpService.delete(`${BASE_URL}/v1/errors/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

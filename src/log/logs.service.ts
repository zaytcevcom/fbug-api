import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  CreateLogDto,
  UpdateLogDto,
  GetLogsQueryDto,
  GetLogStatsQueryDto,
} from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';

@Injectable()
export class LogsService {
  constructor(private readonly httpService: HttpService) {}

  async ingest(projectId: string, key: string, dto: CreateLogDto) {
    return request(() =>
      this.httpService.post(`${BASE_URL}/ingest/${projectId}:${key}/logs`, dto),
    );
  }

  async getAll(query: GetLogsQueryDto, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/logs`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getStats(query: GetLogStatsQueryDto, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/logs/stats`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/logs/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async update(id: string, dto: UpdateLogDto, auth: string) {
    return request(() =>
      this.httpService.put(`${BASE_URL}/v1/logs/${id}`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async delete(id: string, auth: string) {
    return request(() =>
      this.httpService.delete(`${BASE_URL}/v1/logs/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

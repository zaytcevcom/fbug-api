import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetLogsQueryDto, GetLogStatsQueryDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import { LogEntity, LogStats } from '../shared/interfaces/logs.interface';

@Injectable()
export class LogsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(query: GetLogsQueryDto, auth: string) {
    return request<LogEntity[]>(() =>
      this.httpService.get(`${BASE_URL}/v1/logs`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getStats(query: GetLogStatsQueryDto, auth: string) {
    return request<LogStats>(() =>
      this.httpService.get(`${BASE_URL}/v1/logs/stats`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request<LogEntity>(() =>
      this.httpService.get(`${BASE_URL}/v1/logs/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

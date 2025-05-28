import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetErrorsQueryDto, GetErrorStatsQueryDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import { ErrorEntity, ErrorStats } from '../shared/interfaces/errors.interface';

@Injectable()
export class ErrorsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(query: GetErrorsQueryDto, auth: string) {
    return request<ErrorEntity[]>(() =>
      this.httpService.get(`${BASE_URL}/v1/errors`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getStats(query: GetErrorStatsQueryDto, auth: string) {
    return request<ErrorStats>(() =>
      this.httpService.get(`${BASE_URL}/v1/errors/stats`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async getOne(id: string, auth: string) {
    return request<ErrorEntity>(() =>
      this.httpService.get(`${BASE_URL}/v1/errors/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

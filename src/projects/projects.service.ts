import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateProjectDto, UpdateProjectDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';

@Injectable()
export class ProjectsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(params: any, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/projects`, {
        params,
        headers: { Authorization: auth },
      }),
    );
  }

  async create(dto: CreateProjectDto, auth: string) {
    return request(() =>
      this.httpService.post(`${BASE_URL}/v1/projects`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/projects/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async update(id: string, dto: UpdateProjectDto, auth: string) {
    return request(() =>
      this.httpService.put(`${BASE_URL}/v1/projects/${id}`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async delete(id: string, auth: string) {
    return request(() =>
      this.httpService.delete(`${BASE_URL}/v1/projects/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async getDSN(id: string, auth: string) {
    return request(() =>
      this.httpService.get(`${BASE_URL}/v1/projects/${id}/dsn`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateProjectDto, GetProjectsQueryDto, UpdateProjectDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import {
  ProjectDsn,
  ProjectEntity,
} from '../shared/interfaces/projects.interface';

@Injectable()
export class ProjectsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(query: GetProjectsQueryDto, auth: string) {
    return request<ProjectEntity[]>(() =>
      this.httpService.get(`${BASE_URL}/v1/projects`, {
        params: query,
        headers: { Authorization: auth },
      }),
    );
  }

  async create(dto: CreateProjectDto, auth: string) {
    return request<ProjectEntity>(() =>
      this.httpService.post(`${BASE_URL}/v1/projects`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async getById(id: string, auth: string) {
    return request<ProjectEntity>(() =>
      this.httpService.get(`${BASE_URL}/v1/projects/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async update(id: string, dto: UpdateProjectDto, auth: string) {
    return request<ProjectEntity>(() =>
      this.httpService.put(`${BASE_URL}/v1/projects/${id}`, dto, {
        headers: { Authorization: auth },
      }),
    );
  }

  async delete(id: string, auth: string) {
    return request<void>(() =>
      this.httpService.delete(`${BASE_URL}/v1/projects/${id}`, {
        headers: { Authorization: auth },
      }),
    );
  }

  async getDSN(id: string, auth: string) {
    return request<ProjectDsn>(() =>
      this.httpService.get(`${BASE_URL}/v1/projects/${id}/dsn`, {
        headers: { Authorization: auth },
      }),
    );
  }
}

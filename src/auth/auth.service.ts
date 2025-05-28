import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LoginDto, SignupDto } from './dto';
import { BASE_URL } from '../shared/constants';
import { request } from '../shared/request';
import { AuthToken } from '../shared/interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async login(dto: LoginDto) {
    return request<AuthToken>(() =>
      this.httpService.post(`${BASE_URL}/v1/login`, dto),
    );
  }

  async signup(dto: SignupDto) {
    return request(() =>
      this.httpService.post<{ id: number }>(`${BASE_URL}/v1/signup`, dto),
    );
  }
}

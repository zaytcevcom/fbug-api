import { HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';

export async function request<T>(
  cb: () => Observable<AxiosResponse<T>>,
): Promise<T> {
  const response = await firstValueFrom(
    cb().pipe(
      catchError((error) => {
        const { response } = error;
        if (response) {
          throw new HttpException(response.data, response.status);
        }
        return throwError(() => error);
      }),
    ),
  );
  return response.data;
}

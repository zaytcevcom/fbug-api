import { HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';

export async function request<T = unknown>(
  cb: () => Observable<AxiosResponse<T>>,
): Promise<T> {
  const response = await firstValueFrom<AxiosResponse<T>>(
    cb().pipe(
      catchError((error: unknown) => {
        if (
          typeof error === 'object' &&
          error !== null &&
          'response' in error
        ) {
          const response = (
            error as { response: { data: any; status: number } }
          ).response;
          throw new HttpException(
            response.data as string | Record<string, any>,
            response.status,
          );
        }
        return throwError(() => error);
      }),
    ),
  );
  return response.data;
}

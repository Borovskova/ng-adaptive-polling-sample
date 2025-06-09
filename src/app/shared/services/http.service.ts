import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map } from 'rxjs';

import { IUser } from '../interfaces/user.interface';
import { IResponse } from '../interfaces/http.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl: string = 'http://localhost:3000/api/private';

  constructor(private readonly http: HttpClient) {}

  public getUsersData(): Observable<Array<IUser>> {
    return this.getUsersListRequest();
  }

  private getUsersListRequest(): Observable<Array<IUser>> {
    return this.http.get<IResponse>(`${this.apiUrl}/user/list`).pipe(
      map((res: IResponse) => res?.data),
      catchError((err) => {
        throw err;
      }),
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  catchError,
  defer,
  expand,
  filter,
  map,
  of,
  switchMap,
  throwError,
  timer,
} from 'rxjs';

import { IUser } from '../interfaces/user.interface';
import { IResponse } from '../interfaces/http.interface';

const MINIMUM_POLLING_INTERVAL: number = 1000;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl: string = 'http://localhost:3000/api/private';

  constructor(private readonly http: HttpClient) {}

  public getUsersData(): Observable<Array<IUser>> {
    return this.getUsersListRequest();
  }

  public generatePurchasesHistory(
    userId: string,
  ): Observable<Array<{ [key: string]: string }>> {
    return this.generatePurchasesHistoryRequest(userId);
  }

  private generatePurchasesHistoryRequest(
    userId: string,
  ): Observable<Array<{ [key: string]: string }>> {
    return this.http
      .get<IResponse>(`${this.apiUrl}/user/purchases-history?userId=${userId}`)
      .pipe(
        switchMap((res: IResponse) => {
          if (res?.status === 202 && res.data?.taskId) {
            const startPollingInterval: number = 25000;
            const subtractingStep: number = 2000;
            const pollTaskStatusUrl: string = `${this.apiUrl}/user/task-status/${res.data?.taskId}`;

            return this.pollData(
              pollTaskStatusUrl,
              startPollingInterval,
              subtractingStep,
            ).pipe(
              filter(
                (filteredRes) => filteredRes?.data?.status === 'completed',
              ),
              map((parsedRes) => parsedRes?.data),
            );
          } else if (res?.status !== 200 && res?.status !== 201) {
            return throwError(
              () =>
                new Error(
                  res?.data?.errorMessage ||
                    `An error has occured during purchases history generating; Status:${res?.status}`,
                ),
            );
          } else {
            return of(res).pipe(map((res) => res.data));
          }
        }),
        catchError((error) => throwError(() => error)),
      );
  }

  private getUsersListRequest(): Observable<Array<IUser>> {
    return this.http.get<IResponse>(`${this.apiUrl}/user/list`).pipe(
      map((res: IResponse) => res?.data),
      catchError((err) => {
        throw err;
      }),
    );
  }

  public pollData(
    url: string,
    startInterval: number,
    step: number,
  ): Observable<any> {
    return defer(() => {
      let currentInterval = startInterval;

      return timer(currentInterval).pipe(
        expand(() => {
          currentInterval = Math.max(
            MINIMUM_POLLING_INTERVAL,
            currentInterval - step,
          );
          return timer(currentInterval);
        }),
        switchMap(() => this.http.get<any>(url)),
        catchError((error) =>
          throwError(
            () => new Error(`Polling error: ${error.message || error}`),
          ),
        ),
      );
    });
  }
}

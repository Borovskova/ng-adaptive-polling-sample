import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map } from 'rxjs';


import { IUser } from '../interfaces/user.interface';
import { IResponse } from '../interfaces/http.interface';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    public get usersData(): Observable<Array<IUser>>{
        return this.getUsersListRequest()
    };
    
    private apiUrl:string = '';

    constructor(
        private readonly http: HttpClient,
    ) {}

    private getUsersListRequest(): Observable<Array<IUser>> {
        return this.http
            .get<IResponse>(`${this.apiUrl}/user/list`)
            .pipe(
                map((res:IResponse) => res?.data),
                catchError(err => {
                    throw err;
                }),
            );
    }
}

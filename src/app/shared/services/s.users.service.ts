import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AKITA_API, ModelUser } from "..";

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getUsers(): Observable<ModelUser[]> {
        return this.http.get<ModelUser[]>(`${environment.url}/${AKITA_API.USERS}`);
    }
}
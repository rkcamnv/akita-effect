import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AKITA_API, ModelLogin } from "..";

@Injectable({ providedIn: 'root' })
export class AuthenService {

    constructor(
        private http: HttpClient
    ) { }

    public login(model: ModelLogin): Observable<any> {
        return this.http.post<any>(`${environment.url}/${AKITA_API.AUTH}`, model);
    }
}
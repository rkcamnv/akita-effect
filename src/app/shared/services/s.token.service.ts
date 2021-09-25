import { Injectable } from "@angular/core";
import { AKITA_TOKEN, ModelLogin } from "..";

@Injectable({ providedIn: 'root' })
export class TokenService {

    constructor() { }

    setToken(token: string) {
        localStorage.setItem(AKITA_TOKEN, JSON.stringify(token));
    }

    getToken() {
        return JSON.parse(localStorage.getItem(AKITA_TOKEN) || '');
    }

    removeToken() {
        localStorage.removeItem(AKITA_TOKEN);
    }
}
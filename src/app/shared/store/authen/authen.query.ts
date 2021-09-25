import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { AKITA_TOKEN } from "../..";
import { AuthState, AuthStore } from "./authen.store";

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState> {

    constructor(
        protected store: AuthStore
    ) {
        super(store);
    }

    loading$ = this.select(s => s.loading);
    isLoggined$ = this.select(s => !!s.token);
}
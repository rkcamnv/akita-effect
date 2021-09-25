import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { AKITA_TOKEN, ModelLogin } from "../..";

export interface AuthState extends EntityState<ModelLogin> {
    loading: boolean;
    token: string;
}

function createInitialState(): AuthState {
    return {
        loading: false,
        token: localStorage.getItem(AKITA_TOKEN) || ''
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth-store' })
export class AuthStore extends EntityStore<AuthState, ModelLogin> {

    constructor(
    ) {
        super(createInitialState());
    }
}

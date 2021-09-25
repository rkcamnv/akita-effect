import { Injectable } from "@angular/core";
import { EntityState, EntityStore } from "@datorama/akita";
import { ModelLogin } from "../..";

export interface AuthState extends EntityState<ModelLogin> {
    loading: boolean;
    user: ModelLogin;
}

function createInitialState(): AuthState {
    return {
        loading: false,
        user: null as any
    };
}

@Injectable({ providedIn: 'root' })
export class AuthStore extends EntityStore<AuthState, ModelLogin> {

    constructor() {
        super(createInitialState());
    }
}

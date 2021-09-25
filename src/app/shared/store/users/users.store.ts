import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { ModelUser } from "../..";

export interface UsersState extends EntityState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users-store' })
export class UsersStore extends EntityStore<UsersState, ModelUser>{

    constructor() {
        super();
    }
}
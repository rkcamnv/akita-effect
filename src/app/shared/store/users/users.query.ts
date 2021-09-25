import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { UsersState, UsersStore } from ".";
import { ModelUser } from "../..";

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {

    constructor(
        protected store: UsersStore
    ) {
        super(store);
    }

    users$ = combineLatest([
        this.selectAll(),
        this.selectLoading()
    ])
        .pipe(map(users));
}

function users([users, loading]: [ModelUser[], boolean]) {
    return {
        users,
        loading
    }
}
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@datorama/akita-ng-effects";
import { map, switchMap } from "rxjs/operators";
import { UsersActions, UsersStore } from ".";
import { UsersService } from "../..";

@Injectable()
export class UsersEffect {

    constructor(
        private action$: Actions,
        private usersStore: UsersStore,
        private usersService: UsersService
    ) { }

    @Effect()
    fetchUsers$ = this.action$.pipe(
        ofType(UsersActions.UsersGetAll),
        switchMap(_ => this.usersService.getUsers()
            .pipe(
                map(users => this.usersStore.set(users))
            ))
    );
}
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@datorama/akita-ng-effects";
import { map, switchMap, tap } from "rxjs/operators";
import { UsersActions, UsersStore } from ".";
import { ToastrService } from 'ngx-toastr';
import { UsersService } from "../..";

@Injectable()
export class UsersEffect {

    constructor(
        private action$: Actions,
        private usersStore: UsersStore,
        private usersService: UsersService,
        private toastr: ToastrService
    ) { }

    @Effect()
    fetchUsers$ = this.action$.pipe(
        ofType(UsersActions.UsersGetAll),
        switchMap(_ => this.usersService.getUsers()
            .pipe(
                map(users => this.usersStore.set(users))
            ))
    );

    @Effect()
    fetchUser$ = this.action$.pipe(
        ofType(UsersActions.UsersGetOne),
        switchMap(model => this.usersService.getUser(model.id)
            .pipe(
                map(user => this.usersStore.add(user))
            ))
    );

    @Effect()
    deleteUser$ = this.action$.pipe(
        ofType(UsersActions.UsersDeleteOne),
        switchMap(model => this.usersService.deleteUser(model.id)
            .pipe(
                map(user => this.action$.dispatch(UsersActions.UsersDeleteOneSuccess({ user })))
            ))
    );

    @Effect()
    deleteUserSuccess$ = this.action$.pipe(
        ofType(UsersActions.UsersDeleteOneSuccess),
        tap(model => {
            this.usersStore.remove(model.user.id);

            this.toastr.success(
                'User was deleted!',
                'Success',
                {
                    progressBar: true,
                    timeOut: 2000
                }
            );
        })
    );
}
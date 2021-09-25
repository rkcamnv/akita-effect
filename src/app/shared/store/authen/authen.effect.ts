import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@datorama/akita-ng-effects";
import { AuthActions } from ".";
import { switchMap, tap } from 'rxjs/operators';
import { AKITA_ROUTER, AuthenService } from "../..";

@Injectable()
export class AuthenEffect {

    constructor(
        private action$: Actions,
        private authenService: AuthenService,
        private router: Router
    ) { }

    @Effect()
    loginRedirect$ = this.action$.pipe(
        ofType(AuthActions.AuthLoginRedirect),
        tap(_ => this.router.navigateByUrl(AKITA_ROUTER.AUTH))
    )

    @Effect()
    login$ = this.action$.pipe(
        ofType(AuthActions.AuthLogin),
        switchMap(model => this.authenService.login(model.model))
    )
}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@datorama/akita-ng-effects";
import { AuthActions } from ".";
import { tap } from 'rxjs/operators';
import { AKITA_ROUTER } from "../..";

@Injectable()
export class AuthenEffect {

    constructor(
        private action$: Actions,
        private router: Router
    ) { }

    @Effect()
    loginRedirect$ = this.action$.pipe(
        ofType(AuthActions.AuthLoginRedirect),
        tap(_ => this.router.navigateByUrl(AKITA_ROUTER.AUTH))
    )
}
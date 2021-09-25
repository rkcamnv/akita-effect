import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@datorama/akita-ng-effects";
import { AuthActions } from ".";
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AKITA_ROUTER, AuthService, ModelLogin, TokenService } from "../..";
import { AuthStore } from "./authen.store";

@Injectable()
export class AuthenEffect {

    constructor(
        private action$: Actions,
        private authStore: AuthStore,
        private authService: AuthService,
        private tokenService: TokenService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    @Effect()
    loginRedirect$ = this.action$.pipe(
        ofType(AuthActions.AuthLoginRedirect),
        tap(_ => this.router.navigateByUrl(AKITA_ROUTER.AUTH))
    );

    @Effect()
    login$ = this.action$.pipe(
        ofType(AuthActions.AuthLogin),
        tap(_ => this.authStore.update({ loading: true })),
        switchMap(model => this.authService.login(model.model)
            .pipe(
                tap(response => {
                    if (!response.token) {
                        this.toastr.error(
                            response.msg,
                            response.status,
                            {
                                progressBar: true,
                                timeOut: 2000
                            }
                        )
                    } else if (response.token) {
                        this.action$.dispatch(AuthActions.AuthLoginSuccess({ token: response.token }));
                    }
                }),
                finalize(() => this.authStore.update({ loading: false }))
            )
        )
    );

    @Effect()
    loginSuccess$ = this.action$.pipe(
        ofType(AuthActions.AuthLoginSuccess),
        tap(model => {
            this.tokenService.setToken(model.token);
            this.authStore.update({ token: model.token });
            this.router.navigateByUrl(AKITA_ROUTER.CUSTOMERS);
        })
    );
}
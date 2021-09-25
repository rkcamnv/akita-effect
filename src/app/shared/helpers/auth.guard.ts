import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Actions } from "@datorama/akita-ng-effects";
import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { AuthActions } from "..";
import { AuthQuery } from "../store/authen/authen.query";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private actions: Actions,
        private authQuery: AuthQuery
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

        return this.authQuery.isLoggined$.pipe(
            tap(isLoggined => {
                if (!isLoggined) this.actions.dispatch(AuthActions.AuthLoginRedirect);
            }),
            filter(isLoggined => isLoggined),
            map(_ => true)
        );
    }
}
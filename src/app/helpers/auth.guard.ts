import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Actions } from "@datorama/akita-ng-effects";
import { AuthLoginRedirect } from "../shared/store/authen/authen.action";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private actions: Actions
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.actions.dispatch(AuthLoginRedirect);
        return false;
    }
}
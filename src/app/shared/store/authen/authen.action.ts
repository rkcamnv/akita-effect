import { createAction, props } from "@datorama/akita-ng-effects";
import { ModelLogin } from "../..";

export const AuthLogin = createAction('[Authen] Login Action', props<{ model: ModelLogin }>());

export const AuthLoginSuccess = createAction('[Authen] Login Success', props<{ token: string }>())

export const AuthLoginRedirect = createAction('[Authen] Login Redirect');

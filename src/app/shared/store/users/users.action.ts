import { ID } from "@datorama/akita";
import { createAction, props } from "@datorama/akita-ng-effects";
import { ModelUser } from "../..";

export const UsersGetAll = createAction('[Users] Get All Users');

export const UsersGetOne = createAction('[Users] Get A User', props<{ id: ID }>());

export const UsersDeleteOne = createAction('[Users] Delete A User', props<{ id: ID }>());

export const UsersDeleteOneSuccess = createAction('[Users] Delete A User Success', props<{ user: ModelUser }>());
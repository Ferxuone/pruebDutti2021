import { createAction, props } from '@ngrx/store';
import { ShipResponseModel } from '../models/ships.models';

export const setListInStore = createAction('[SHIPS] Set ship list in store', props<{shipsPage: ShipResponseModel}>());

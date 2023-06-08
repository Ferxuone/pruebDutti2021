import { createAction, props } from '@ngrx/store';
import { ShipModel } from '../models/ships.models';

export const setListInStore = createAction('[SHIPS] Set ship list in store', props<{ships: ShipModel[]}>());
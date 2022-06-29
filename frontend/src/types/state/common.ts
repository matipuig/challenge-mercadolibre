/**
 * Contains the common types for all the state management.
 */

import { PropsWithChildren } from 'react';

export interface DispachableStateAction<ActionType, Payload> {
  type: ActionType;
  payload: Payload;
}

export interface ProviderWithState<StateType> extends PropsWithChildren {
  value: StateType;
}

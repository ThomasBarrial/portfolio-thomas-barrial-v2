import { createContext, Dispatch } from 'react';
import { AppActions } from './Actions';

export interface AppState {
  index: number;
}

export const AppContextDefault: AppState = {
  index: 0,
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppActions>;
}>({
  state: AppContextDefault,
  dispatch: () => undefined,
});

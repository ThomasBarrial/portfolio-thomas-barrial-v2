export enum ActionType {
  SetIndex,
}

export interface SetIndex {
  type: ActionType.SetIndex;
  payload: number;
}

export interface SetIsContact {
  setIsContact: () => void;
}

export type AppActions = SetIndex;

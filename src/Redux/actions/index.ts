import { ActionType } from "../actions-types";
import { CellTypes } from "../cell";
//payloads are menth to be refactored in future only here for placeholding and testing

export interface MoveCell {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: "up" | "down";
  };
}

export interface DeleteCell {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface UpdateCell {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface InsertCellBefore {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: CellTypes;
  };
}

export type Action = MoveCell | DeleteCell | UpdateCell | InsertCellBefore;

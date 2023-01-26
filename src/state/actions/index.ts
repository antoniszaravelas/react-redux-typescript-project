import { ActionType } from "../action-types";

// this refers to the different action categories we can have

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPOSITORIES;
};

type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

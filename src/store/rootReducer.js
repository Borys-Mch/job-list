import { combineReducers } from "redux";

import { positionReducer } from "./positions/positionReducer";

export const rootReducer = combineReducers({ positions: positionReducer });

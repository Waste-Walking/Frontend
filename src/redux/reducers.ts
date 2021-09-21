import { combineReducers } from "redux";
import counter from "@redux/slices/counter";
import createEvent from "@redux/slices/createEvent";

const rootReducer = combineReducers({ counter, createEvent });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

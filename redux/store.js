import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { createWrapper } from "next-redux-wrapper";

export const store = createStore(reducer, applyMiddleware(thunk));

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
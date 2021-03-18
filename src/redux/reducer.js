import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, changeFilter } from "./actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

//==================BEFORE TOOLKIT============

// import { combineReducers } from "redux";
// import { ADD_CONTACT, FILTER_CONTACT, REMOVE_CONTACT } from "./constants";

// // const initialState = {
// //   contacts: {
// //     items: [],
// //     filter: "",
// //   },
// // };

// // const items = (state = [], { type, payload }) => {
// //   switch (type) {
// //     case ADD_CONTACT:
// //       return [...state, payload];

// //     case REMOVE_CONTACT:
// //       return state.filter((item) => item.id !== payload);

// //     default:
// //       return state;
// //   }
// // };

// // const filter = (state = "", { type, payload }) => {
// //   switch (type) {
// //     case FILTER_CONTACT:
// //       return payload;

// //     default:
// //       return state;
// //   }
// // };

// // export default combineReducers({ items, filter });

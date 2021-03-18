import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from "./constants";

const addContact = createAction(ADD_CONTACT, (contact) => ({
  payload: {
    id: uuidv4(),
    ...contact,
  },
}));

const removeContact = createAction(REMOVE_CONTACT);

const changeFilter = createAction(FILTER_CONTACT);

export { addContact, removeContact, changeFilter };

//=======================BEFORE TOOLKIT=======================================

// import { v4 as uuidv4 } from "uuid";
//const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     ...contact,
//   },
// });

// const removeContact = (id) => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });

// const changeFilter = (filter) => ({
//   type: FILTER_CONTACT,
//   payload: filter,
// });

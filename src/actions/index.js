export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

// NOTES:
// type: describes purpose of the Action, required
// payload: describes what the action is, common.
// type needs to be a string. Sometimes set string = to a constant variable
// returned object is the action. Actions normally have two values: Type and Payload.
// As is, this is just a normal function when called. We need to wire it into redux so that when it is called it flows through the reducers. Must bind this function to the BookList container

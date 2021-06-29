import uuid from "uuid/dist/v1";

export const experienceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FORM":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ];
    default:
      return state;
  }
};

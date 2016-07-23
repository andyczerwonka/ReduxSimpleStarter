export const selectBook = (book) => {
  // this is an action creator, so it needs to create an action
  // every action my have a type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}

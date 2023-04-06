export const selectContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts;
};

export const selectFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.filter;
};


export const selectFilteredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
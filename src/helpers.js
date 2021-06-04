export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName); // change sessionStorage to localStorage if needed
  return sessionState && JSON.parse(sessionState);
};

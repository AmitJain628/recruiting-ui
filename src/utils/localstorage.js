const getValueFromLocalStorage = name => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch {
    return null;
  }
};

const setValueFromLocalStorage = (name, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(name, serializedState);
  } catch {
    // ignore
  }
};

export { getValueFromLocalStorage, setValueFromLocalStorage };

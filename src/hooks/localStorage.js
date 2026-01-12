const useLocalStorage = () => {
  const key = "ekart-backend-sn0914r";

  const setLocalStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  return { setLocalStorage, getLocalStorage };
};

export default useLocalStorage;
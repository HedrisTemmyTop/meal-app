import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = function ({ children }) {
  const [ids, setIds] = useState([]);

  const addFavorite = function (id) {
    setIds((prev) => [id, ...prev]);
  };
  const removeFavorite = function (removedId) {
    setIds((prev) => prev.filter((id) => id !== removedId));
  };
  const value = {
    addFavorite,
    ids,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

export const useFavoriteCtx = function () {
  return useContext(FavoritesContext);
};

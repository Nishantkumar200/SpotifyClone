import React, { useContext, useReducer } from "react";
export const DataLayerContext = React.createContext();

 export const Datalayer = ({initialState, reducer, children}) => (
  <DataLayerContext.Provider value= {useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export default Datalayer;

export const useDataLayerValue = () => useContext(DataLayerContext);

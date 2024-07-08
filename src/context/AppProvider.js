import React, { createContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext = createContext();
function AppProvider({ children }) {
    const initialValues = {
        something: 10,
    };
    const reducer = (state, action) => {};

    const [state, dispatch] = useReducer(reducer, initialValues);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export { AppProvider, StateContext, DispatchContext };

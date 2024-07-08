import React, { createContext, useReducer } from "react";

function AppProvider({ children }) {
    const StateContext = createContext();
    const DispatchContext = createContext();

    const initialValues = {
        questions: 0,
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

export { AppProvider };

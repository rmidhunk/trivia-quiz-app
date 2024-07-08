import React, { createContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext = createContext();
function AppProvider({ children }) {
    const initialValues = {
        marks: 0,
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "UpdateMark":
                return { marks: state.marks + 1 };

            default:
                return state;
        }
    };

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

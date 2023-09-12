'use client'
import React, { createContext, useContext, useState } from "react";

// Create a new context
const AppContext = createContext();

// Create a provider component
export function AppProvider({ children }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [item, setItem] = useState({
        itemName: "",
        price: "",
        quantity: "",
    });

    const [itemList, setItemList] = useState([]);

    const values = {
        user,
        setUser,
        item,
        setItem,
        itemList,
        setItemList,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

// Create a custom hook to access the context
export function useAppContext() {
    return useContext(AppContext);
}

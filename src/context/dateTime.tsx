import React, { createContext, useContext, useState, ReactNode } from "react";

interface DisplayContextProps {}

export const DisplayContext = createContext<DisplayContextProps | undefined>(
  undefined
);

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplay must be used within a DisplayContextProvider");
  }
  return context;
};

interface DisplayContextProviderProps {
  children: ReactNode;
}

export const DisplayContextProvider: React.FC<DisplayContextProviderProps> = ({
  children,
}) => {
  const [dateTime, setDateTime] = useState();

  const values = {
    dateTime: dateTime,
    setDateTime: setDateTime,
  };

  return (
    <DisplayContext.Provider value={values}>{children}</DisplayContext.Provider>
  );
};

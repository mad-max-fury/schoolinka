import React, { createContext, useContext, useState, ReactNode } from "react";

interface DisplayContextProps {
  DisplayFlow: {
    calender: boolean;
    editor: boolean;
    preview: boolean;
  };
  switchDisplayMethod: (method: "calender" | "editor" | "preview") => void;
}

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
  const [DisplayFlow, setDisplayFlow] = useState<{
    calender: boolean;
    editor: boolean;
    preview: boolean;
  }>({
    calender: true,
    editor: false,
    preview: false,
  });

  const switchDisplayMethod = (method: "calender" | "editor" | "preview") => {
    return setDisplayFlow((prevFlow) => ({
      ...prevFlow,
      calender: method === "calender",
      editor: method === "editor",
      preview: method === "preview",
    }));
  };

  const values = {
    DisplayFlow,
    switchDisplayMethod,
  };

  return (
    <DisplayContext.Provider value={values}>{children}</DisplayContext.Provider>
  );
};

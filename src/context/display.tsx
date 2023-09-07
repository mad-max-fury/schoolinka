import React, { createContext, useContext, useState, ReactNode } from "react";

interface DisplayContextProps {
  DisplayFlow: {
    calender: boolean;
    editor: boolean;
    preview: boolean;
  };
  selectedDateAndTime: {
    date: Date | null;
    time: Date | null;
  };
  switchDisplayMethod: (method: "calender" | "editor" | "preview") => void;
  updateSelectedDateAndTime: ({
    key,
    value,
  }: {
    key: string;
    value: string | Date;
  }) => void;
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
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<{
    date: Date | null;
    time: Date | null;
  }>({
    date: null,
    time: null,
  });

  const switchDisplayMethod = (method: "calender" | "editor" | "preview") => {
    return setDisplayFlow((prevFlow) => ({
      ...prevFlow,
      calender: method === "calender",
      editor: method === "editor",
      preview: method === "preview",
    }));
  };
  const updateSelectedDateAndTime = ({
    key,
    value,
  }: {
    key: string;
    value: string | Date;
  }) => {
    return setSelectedDateAndTime((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const values = {
    DisplayFlow,
    selectedDateAndTime,
    switchDisplayMethod,
    updateSelectedDateAndTime,
  };

  return (
    <DisplayContext.Provider value={values}>{children}</DisplayContext.Provider>
  );
};

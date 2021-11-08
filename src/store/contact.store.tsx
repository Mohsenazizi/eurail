import React, { useState, createContext, useContext } from 'react';

interface UseContactContext {
  selectedItemIndex: number,
  selectedCategory: string,
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
}

const ContactContext = createContext<UseContactContext>({} as UseContactContext);

export const ContactProvider: React.FC = ({ children }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  return (
    <ContactContext.Provider
      value={{
        selectedItemIndex,
        selectedCategory,
        setSelectedItemIndex,
        setSelectedCategory,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = (): UseContactContext => {
  const {
    selectedItemIndex,
    selectedCategory,
    setSelectedItemIndex,
    setSelectedCategory,
  } = useContext(ContactContext);

  return {
    selectedCategory,
    selectedItemIndex,
    setSelectedCategory,
    setSelectedItemIndex,
  };
};

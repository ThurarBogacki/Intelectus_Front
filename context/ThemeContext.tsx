"use client"
import { createContext, useContext, useState, ReactNode } from "react";

// Defina o tipo para o contexto
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Criando o contexto com um valor inicial `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider para encapsular a lógica do tema
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para acessar o contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}

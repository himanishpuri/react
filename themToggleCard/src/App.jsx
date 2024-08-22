import React, { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

// to give the mehtods in the context functionalities, we use a concept similiar to virtual fucntions in C++, that fucntions with the same name, are made here and the fucntionality autamatically goes

function App() {

  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  const darkTheme = function() {
    setThemeMode('dark');
  };

  const lightTheme = function() {
    setThemeMode('light');
  };

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-black">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

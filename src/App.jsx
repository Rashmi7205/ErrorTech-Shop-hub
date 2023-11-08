import { useState } from "react";
import CustomRoutes from "./Routes/CustomRoutes";
import { DarkModeBtn, Footer, Search } from "./Components";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSearching,setIsSearching] = useState(false);

  const handleSearchBtn = ()=>{
    setIsSearching(!isSearching);
  }

  const handleThemeChange = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <div
      className={`relative flex flex-col w-full  h-[100vh]-min ${
        darkMode ? "text-white bg-slate-700" : "bg-[#f8d4bd] text-black"
      }`}
    >
      <CustomRoutes />
      <DarkModeBtn
        isBright={darkMode}
        onclick={handleThemeChange}
      />
      <Search isSearching={isSearching} onclick={handleSearchBtn}/>
      <Footer />
    </div>
  );
}

export default App;

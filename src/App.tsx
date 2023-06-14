import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import { useState } from "react"

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`w-screen min-h-screen overflow-y-hidden ${isDark ? (`bg-secondary text-white`) : (`bg-primary text-gray-900`)}`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      <MainContainer isDark={isDark}/>
    </div>
  )
}

export default App

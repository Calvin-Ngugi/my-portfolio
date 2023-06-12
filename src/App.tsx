import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import { useState } from "react"

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`w-screen min-h-screen ${isDark ? (`bg-secondary text-white`) : (`bg-primary text-black`)}`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      <MainContainer />
    </div>
  )
}

export default App

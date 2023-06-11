import Navbar from "./components/Navbar";
import { useState } from "react"

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`w-screen h-screen ${isDark ? (`bg-secondary text-white`) : (`bg-primary text-black`)}`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
    </div>
  )
}

export default App

import Header from "./Header"

const MainContainer = ({isDark}:any) => {
  return (
    <div className="h-screen m-auto">
      <Header isDark={isDark}/>
    </div>
  )
}

export default MainContainer
import Header from "./Header";
import TechStacks from "./TechStacks";

const MainContainer = ({ isDark }: any) => {
  return (
    <div className="min-h-screen m-auto">
      <Header isDark={isDark} />
      <TechStacks />
    </div>
  );
};

export default MainContainer;

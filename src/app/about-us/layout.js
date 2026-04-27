import BreakingNews from "@/componant/shared/BreakingNews";
import Header from "@/componant/shared/Header";
import Navbar from "@/componant/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;

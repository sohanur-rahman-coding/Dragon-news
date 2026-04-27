
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

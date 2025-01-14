import { Outlet } from "react-router-dom";
import Rectangle1 from "../assets/images/Rectangle1.png";

const HomeLayout = () => {
  const style = {
    backgroundImage: `url(${Rectangle1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100vh",
  };

  return (
    <div className="relative h-screen">
      <div style={style} className="absolute inset-0"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

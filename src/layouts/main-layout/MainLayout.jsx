import { Outlet } from "react-router-dom";
import Navbar from "../../shared-components/navbar/Navbar";
import Footer from "../../shared-components/footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
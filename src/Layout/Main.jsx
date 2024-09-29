import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="font-inter">
            <div className="container mx-auto">
                <div className="mx-4 md:mx-8 xl:mx-0">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
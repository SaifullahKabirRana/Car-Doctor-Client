import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
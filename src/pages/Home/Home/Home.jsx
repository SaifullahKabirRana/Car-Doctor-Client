import { useContext } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Information from "../Information/Information";
import Services from "../Services/Services";
import { AuthContext } from "../../../providers/AuthProvider";
import OurTeam from "../OurTeam/OurTeam";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader "></span>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
            <OurTeam></OurTeam>
            <Features></Features>
            <Reviews></Reviews>


        </div>
    );
};

export default Home;
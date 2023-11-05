import About from "./About";
import Carousel from "./Carousel";
import Services from "./Services";

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <About />
            <Services/>
        </div>
    );
};

export default HomePage;
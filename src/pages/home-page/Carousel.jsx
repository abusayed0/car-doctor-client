import image1 from "../../assets/images/banner/1.jpg"
import image2 from "../../assets/images/banner/2.jpg"
import image3 from "../../assets/images/banner/3.jpg"
import image4 from "../../assets/images/banner/4.jpg"
const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full rounded-xl">
                <img src={image1} className="w-full h-[600px]" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)]">
                </div>
                <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2  text-white max-w-[500px] flex flex-col gap-7">
                    <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full h-[600px]" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)]">
                </div>
                <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2  text-white max-w-[500px] flex flex-col gap-7">
                    <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full h-[600px]" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)]">
                </div>
                <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2  text-white max-w-[500px] flex flex-col gap-7">
                    <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full h-[600px]" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)]">
                </div>
                <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2  text-white max-w-[500px] flex flex-col gap-7">
                    <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-primary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
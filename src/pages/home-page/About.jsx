import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-28">
                <div className="w-full md:w-1/2 relative">
                    <img src={person} className=" rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute  -right-14 -bottom-20 h-[80%] w-[80%] border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-3xl text-orange-700 font-bold">About Us</h3>
                    <h1 className="mt-5 text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="mt-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mt-5">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="mt-7 btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
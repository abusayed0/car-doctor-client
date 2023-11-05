import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
    console.log(service);
    const { _id, img, title, price } = service;
    const navigate = useNavigate();
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="h-[300px]" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-red-600 font-semibold">Price : ${price}</p>
                    <button onClick={() => navigate(`/checkout/${_id}`)} className="btn btn-success">Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-provider/AuthProvider";

const Checkout = () => {

    const data = useLoaderData();
    console.log(data);
    const {_id, title, price, img, service_id } = data;
    const {user} = useContext(AuthContext);

    const handleConfirmOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        console.log(name, date, price, email);
        const order = {
            customerName : name,
            email: email,
            date: date,
            service_id: service_id,
            img: img,
            sevice: title,
            price: price
        };
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Book service : {title}</h2>
            <form onSubmit={handleConfirmOrder} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input defaultValue={user?.displayName} name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} name="price" type="text" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="mt-5 form-control">
                    <button type="submit" className="btn btn-error">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
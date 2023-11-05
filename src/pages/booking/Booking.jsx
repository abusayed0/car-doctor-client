import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth-provider/AuthProvider";
import SingleBooking from "./SingleBooking";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [allBookings, setAllBooking] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [url]);
    // console.log(allBookings);

    const handleDelete = (id, sevice) => {
        console.log(id);
        const sure = confirm(`Are you sure delete ${sevice}?`);

        if (sure) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        console.log("Deleted successfull.");
                        const remaing = allBookings.filter(booking => booking._id !== id);
                        setAllBooking(remaing);
                    }
                })
        }

    };

    const handleConfirmBooking = id => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({status : "confirm"})

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){

                const others = allBookings.filter(booking => booking._id !== id);

                const updated = allBookings.find(booking => booking._id === id);

                console.log(others);
                console.log(updated);
                updated.status = "confirm";
                setAllBooking([updated, ...others]);
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-semibold">Your Bookings : {allBookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBookings.map(booking => <SingleBooking
                              key={booking._id}
                              booking={booking}
                              handleDelete={handleDelete}
                              handleConfirmBooking={handleConfirmBooking}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;
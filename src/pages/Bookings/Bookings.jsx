import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/checkout?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            
            <div className="mt-5 md:mt-7 xl:mt-10 mb-10 md:mb-12 xl:mb-16">
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        {/* <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                ></BookingRow>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
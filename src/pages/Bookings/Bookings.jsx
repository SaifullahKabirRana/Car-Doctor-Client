import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure()
    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader "></span>
        </div>
    }
    // const url = `https://car-doctor-server-lilac-delta.vercel.app/checkout?email=${user?.email}`;
    const url = `/checkout?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBookings(res.data))
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data);
        //     })
        // fetch(url, {credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, []);



    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#29B170",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-lilac-delta.vercel.app/checkout/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Order has been deleted.",
                                icon: "success",
                                confirmButtonColor: '#FF3811'
                            });
                            const remaining = bookings.filter(booking => booking._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        });
    }

    const handleBookingConfirm = _id => {
        fetch(`https://car-doctor-server-lilac-delta.vercel.app/checkout/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== _id);
                    const updated = bookings.find(booking => booking._id === _id);
                    updated.status = 'Confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);

                }
            })
    }


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
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
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

import { LuX } from "react-icons/lu";
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, service, price, date, status } = booking;
    
    return (
        <tr>
            <th className="">
                <button onClick={() => handleDelete(_id)} className="btn btn-xs md:btn-sm btn-circle bg-[#444444]"><LuX className="text-sm md:text-lg text-white font-semibold" /></button>
            </th>
            <td className="">
                <div className="avatar">
                    <div className="rounded-xl h-14 w-16 md:h-20 md:w-20 lg:h-24 lg:w-28 xl:h-28 xl:w-32">
                        <img
                            src={img}
                            alt="Services Images" />
                    </div>
                </div>
            </td>
            <td className="font-semibold text-sm md:text-base xl:text-xl">
                {service}
            </td>
            <td className="font-semibold text-sm md:text-base xl:text-xl">
                ${price}
            </td>
            <td className="font-medium text-sm md:text-base xl:text-xl">{date}</td>
            <th>
                {
                    status === 'Confirm' ? 
                    <button className="btn btn-xs md:btn-sm  border border-[#29B170] text-[#29B170] font-semibold bg-white ">Approved</button>
                    : 
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-xs md:btn-sm  bg-[#FF3811] text-white font-semibold ">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user?.email}`;


    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        }) 
        .catch(error =>{
            console.log(error)
        })
        // fetch(url)
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        //     setBookings(data);
        // })
        //
    }, [url])

//delete
    const handleDelete = (id) =>{
        const proceed = confirm('Are u sure? U want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}` , {
                method: 'DELETE',
                // headers:{
                //     'content-type' : 'application/json'
                // },
                // body: JSON.stringify()
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully!');

                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining); 
                }
            })
            .catch(error =>{
                console.log(error);
            })
        }
    };
//update
const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
        .catch(error =>{
            console.log(error);
        })
}

    return (
        <div className="overflow-x-auto">
            <h1>total booking: {bookings.length} </h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>images</th>
                        <th>Services</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking)=> <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></BookingRow> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;
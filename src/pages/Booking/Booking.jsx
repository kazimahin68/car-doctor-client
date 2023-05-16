import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
    const loadedServices = useLoaderData();
    const { img, price, title} = loadedServices;
    // console.log(title, price)
    const {user} = useContext(AuthContext);
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const massage = form.massage.value;
        console.log(name, date, phone, email, massage)

        const order = {
            customerName: name,
            email,
            date,
            price: price,
            serviceName: title,
            img
        }

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(order) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert("You are successfully booked the service")
            }
        })
    }

    return (
        <div className="bg-[#F3F3F3] p-10 rounded-xl">
            <form onSubmit={handleBooking}>
                <div className="grid grid-cols-2 gap-10">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10 mb-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="tel" name="phone" placeholder="Your Phone" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder={user?.email} className="input input-bordered" defaultValue={user?.email}/>
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Short Massage</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" name="massage" placeholder="Your Massage"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-orange-600 border-none" type="submit" value="Booking Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Booking;
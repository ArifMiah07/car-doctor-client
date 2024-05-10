import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData();

    const {user} = useContext(AuthContext);

    console.log(service);
    const {title, _id, price, img} = service;


    const handleOrderNow = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const massage = form.massage.value;


        const bookOrderData ={
            customerName: name, 
            email, 
            date, 
            price,
            massage,
            service: title,
            service_id: _id,
            img

        }

        console.log(bookOrderData);

        fetch('http://localhost:5000/bookings',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookOrderData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully!')
                // form.reset();
            }
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div className="card shrink-0 w-full shadow-2xl bg-[#F3F3F3] p-24">
            <h2 className="text-center text-3xl font-bold">Check Out: {title}</h2>
            <form onSubmit={handleOrderNow} className="card-body">
                <div className="grid md:grid lg:grid lg:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input name="last_name" type="last_name" placeholder="Last Name" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="Date" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name="phone" type="number" placeholder="Your Phone" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input name="price" type="text" defaultValue={'$'+ price}  placeholder="Your Amount" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Massage</span>
                    </label>
                    {/* <input  type="email" placeholder="Your email" className="input input-bordered" required /> */}
                    <textarea className="p-6" cols="30" rows="10" type="text" placeholder="Your Massage"   name="massage" id=""></textarea>
                </div>
                
                <div className="form-control mt-6">
                    {/* <button>Login</button> */}
                    <input  className="btn text-white text-[20px] font-semibold bg-[#FF3811]" type="submit" value={'Order Conform'} />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
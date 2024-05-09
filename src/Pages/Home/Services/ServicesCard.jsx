import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#444] text-[25px] font-bold ">{title}</h2>
                <div className="card-actions ">
                <p className="text-[20px] font-semibold text-[#FF3811] " >Price: {price}</p>
                <Link to={`/checkOut/${_id}`}><button className=""><FaLongArrowAltRight className="text-red-500" /></button></Link>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object
}

export default ServicesCard;
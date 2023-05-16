import { PropTypes } from "prop-types";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {

    const { _id, title, img, price } = service;
    // console.log(service)
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="" className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-orange-600">Price: $ {price}</p>
                    <Link to={`/booking/${_id}`} className="btn text-orange-600 btn-outline border-none"><FaAngleRight></FaAngleRight></Link>
                </div>
            </div>
        </div>
    );
};

ServiceCart.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default ServiceCart;
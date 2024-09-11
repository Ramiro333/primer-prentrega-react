import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "./Carrousel.css"
function Carrousel(products) {
    const settings = {
        className: "img-carrousel",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: true
    };
    console.log(products.products)
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {products.products.slice(0, 6).map((product) => (
                    <div key={products.id}>
                        <img src={product.image} alt={product.name} />
                        <Link to={`/item/${product.id}`}>
                        ir al producto
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrousel;

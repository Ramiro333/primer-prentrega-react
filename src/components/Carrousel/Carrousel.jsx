import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "./Carrousel.css"
function Carrousel(products) {
    const settings = {
        className: "img-carrousel",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {products.products.slice(0, 6).map((product) => (
                    <div key={product.id} className="contenedor-producto-carrousel">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="link-producto">
                            <Link to={`/item/${product.id}` }>
                                <button className="boton-producto">ir al producto</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrousel;

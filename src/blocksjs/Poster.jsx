import "../App.css"
import freeShipping from "../img/free_shipping.svg"
import money from "../img/money.svg"
import support from "../img/support.svg"
import coverImage from "../img/cover_image.png"

function Feature({path, title}){
    return(
        <div className="feature__item">
            <img className="feature__image" src={path} />
            <h3 className="feature__title">{title}</h3>
        </div>
    )
}

function Cover(){
    return(
        <div className="cover">
            <div className="cover__content">
                <div className="cover__inner">
                    <img className="cover__image" src={coverImage} alt="" />
                    <div className="cover__all__text">
                        <h3 className="cover__preview">
                            HOT DEALS THIS WEEK
                        </h3>
                        <h1 className="cover__title">
                        SALE UP 50% <br /> MODERN FURNITURE
                        </h1>
                        <a href="" className="view__link">View Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Poster(){
    return(
        <div className="poster">
            <div className="features">
                <Feature path={freeShipping} title="Fast service"/>
                <Feature path={money} title = "100% money back" />
                <Feature path={support} title="Suport 24/7" />
            </div>
            <Cover />
        </div>
    )
}
import Header from "./blocksjs/Header"
import Poster from "./blocksjs/Poster"
import chair from "./img/chair.png"
import vase from "./img/vase.png"



function OffersCard({bg,imgPath, cardText}){
  return(
    
    <div className="offers__card" style={{background:`${bg}`}}>
      <img className="offer__img" src={imgPath} alt="" />
      <div className="offer__text" >
        <h2 className="offer__title">{cardText}</h2>
        <a href="" className="view__link">view details</a>
      </div>
    </div>
  )
}

const colorsCards = ["#FAFAFA", "#EAE9E7"]

export default function App(){
  return(
    <>
      <Header />
      <Poster />
      <div className="offers">
        <div className="offers__content">
          <OffersCard imgPath={chair} cardText={"INY VINTAGE CHAIR"} bg={colorsCards[0]}/>
          <OffersCard imgPath={vase} cardText={"LARGE TERRACOTA VASE"} bg={colorsCards[1]}/>
        </div>
      </div>
    </>
  )
}

import Card from "../components/Card.jsx"
import CardSlider from "../components/CardSlider.jsx"
import { cards } from "../components/Data.jsx"
import Featured from "../components/Featured.jsx"
import Footer from "../components/Footer.jsx"
import Head from "../components/Head"
import Info from "../components/Info.jsx"
import Navbar from "../components/Navbar"
import Sales from '../components/Sales.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <Head />
      <Sales />
      <Info />
      <div className='card-main'>
        {
          cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
      <Featured />
      <CardSlider />
      <Footer />
    </>
  )
}

export default Home
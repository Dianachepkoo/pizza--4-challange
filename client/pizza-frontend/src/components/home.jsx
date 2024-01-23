import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/pizza">Pizza</Link>
            <Link to="/pizzas">Pizzas</Link>
            <Link to="/restaurantpizzas">Resp</Link>
        </div>
    )
}

export default Home;
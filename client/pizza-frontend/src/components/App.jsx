import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Pizza from './Pizza';
import PizzasList from './PizzasList';
import RestaurantsList from './RestaurantsList';
import RestaurantDescription from "./RestaurantDescription";
import RestaurantPizzas from "./RestaurantPizzas";
import Home from "./home"



function App() {
  return (
    <div>
    <BrowserRouter>
    <Home/>
    <Routes>

    <Route exact path="/restaurants/:id" components={<RestaurantDescription />} />
    <Route path="/restaurants" components ={<RestaurantsList/>} />
    <Route path="/pizza" components={<Pizza/>} />
    <Route path="/pizzas" components={<PizzasList/>} />
    <Route path="/restaurantpizzas" components={<RestaurantPizzas/>}/>

      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
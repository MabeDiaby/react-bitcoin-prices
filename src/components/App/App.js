import "./App.css";
import Home from "../Home/Home";
import Price from "../Price/Price";
import React, { useState } from "react";
import Currencies from "../Currencies/Currencies";
import { Route, Link, Redirect } from "react-router-dom";
// import { Redirect } from "react-router";
// import { RouterProps } from "react-router";
// import { Link } from "react-router-dom";

function App(){
  const [price, setPrice] = useState()

      return (
        <div>
          <nav>
            <Link to="/">
              <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
              <h1>Bitcoin prices</h1>
            </Link>
            <Link to="/currencies">Currency List</Link>
          </nav>
          <main>
              <Route
                path="/"
                exact component={Home}
              />
              <Route
                path="/currencies"
                component={Currencies}
              />
              <Route
                path="/currency"
                render={()=>
              <Redirect to="/currencies" />}
              />
              <Route
                path="/price/:currency"
                render={routerProps =>
                (<Price setPrice={setPrice}
                match={routerProps.match}
                price = {price}/>)}
              />
          </main>
        </div>
    );
}

export default App;

import React from "react";
import "./Currencies.css";
import { Link } from "react-router-dom";
import listOfCurrencies from "./list.json";

const Currencies = () => {
    let list = listOfCurrencies.map(item => {
      return (
        <div className="currency" key={item.currency}>
          <p>
            <Link to={"/price/" + item.currency}>{item.currency}</Link>:{" "}
            {item.country}
          </p>
        </div>
      );
    });
    return <div>{list}</div>;
}

export default Currencies;

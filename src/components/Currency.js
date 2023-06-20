import React, { useContext, useState } from "react";
import "../Currency.css";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const customStyleMainBox = {
    width: "306px",
    height: "58px",
    backgroundColor: "#92e39a",
    color: "white",
    fontSize: "20px",
  };
  const customStyleDropDown = {
    backgroundColor: "#93e499",
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.currentTarget.dataset.currency;
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
    setDropdownOpen(false);
  };

  const getCurrencyDescription = (currency) => {
    switch (currency) {
      case "$":
        return "Dollar";
      case "€":
        return "Euro";
      case "£":
        return "Pound";
      case "₹":
        return "Rupee";
      default:
        break;
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="custom-dropdown">
      <div className={`dropdown-wrapper ${dropdownOpen ? "open" : ""}`}>
        <div
          className="dropdown-header"
          onClick={toggleDropdown}
          style={customStyleMainBox}
        >
          {`Currency (${currency} ${getCurrencyDescription(currency)})`}
        </div>
        {dropdownOpen && (
          <ul className="dropdown-list" style={customStyleDropDown}>
            <li data-currency="$" onClick={handleCurrencyChange}>
              &#36; Dollar
            </li>
            <li data-currency="€" onClick={handleCurrencyChange}>
              &euro; Euro
            </li>
            <li data-currency="£" onClick={handleCurrencyChange}>
              &pound; Pound
            </li>
            <li data-currency="₹" onClick={handleCurrencyChange}>
              &#8377; Rupee
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Currency;

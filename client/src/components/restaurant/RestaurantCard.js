import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import './style.css'
export function RestaurantCard(props) {
  const { description, name, _id } = props.rest;
  return (
    <div className="col s4 m4">
      <div className="card blue-grey lighten-1">
      {/* //blue-grey darken-1 */}
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Link to={`/restaurants/${_id}`}>Order Now</Link>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = { rest: PropTypes.any };

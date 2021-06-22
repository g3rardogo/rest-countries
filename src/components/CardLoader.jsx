import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/components/CountryCard.scss";

const CardLoader = () => {
  return (
    <div className="card__container">
      <div className="flag__container">
        <img src="" alt="" />
      </div>
      <div className="info__container">
        <h3>
          <Skeleton />
        </h3>
        <p>
          <strong>
            <Skeleton />
          </strong>
        </p>
        <p>
          <strong>
            <Skeleton />
          </strong>
        </p>
        <p>
          <strong>
            <Skeleton />
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CardLoader;

import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/CountryDetails.scss";

const CountryDetailsLoader = () => {
  return (
    <div className="country__container">
      <div className="back__container">
        <button>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
      </div>
      <div className="info__container">
        <div className="flag__container">
          <Skeleton className="flag-image--skeleton" />
        </div>
        <div className="details__container">
          <div className="wrapper">
            <div className="description__container--skeleton">
              <h1>
                <Skeleton />
              </h1>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
            </div>
            <div className="description__container--skeleton">
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
              <p>
                <strong>
                  <Skeleton />
                </strong>
                <Skeleton />
              </p>
            </div>
          </div>
          <div className="borders__container">
            <h3>
              <Skeleton />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsLoader;

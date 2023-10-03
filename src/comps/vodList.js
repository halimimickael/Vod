import React from "react";
import VodItems from "./vodItems";

export default function VodList(props) {
  if (props.vod_ar.length === 0) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center">
          <h2>We are sincerely sorry, the movie you are looking for does not exist</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2>List of Movies</h2>
        <div className="row">
          {props.vod_ar.map((item) => {
            return <VodItems key={item.imdbID} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

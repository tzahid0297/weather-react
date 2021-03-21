import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="form-row mx-auto pb-2">
          <div className="col-5">
            <input
              type="location"
              className="form-control"
              placeholder="Enter location"
              id="search-text-input"
            />
          </div>
          <div className="col">
            <input type="submit" value="Search" className="btn btn-info" />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Current Location"
              className="btn btn-success"
              id="current-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

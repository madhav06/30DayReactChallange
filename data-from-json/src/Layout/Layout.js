import React from "react";
import Data from "./airports.json";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <h1 className="details"> Aiport Details of India</h1>
      <div className="records">
        {Data.map((record, key) => {
          return (
            <>
              <br />
              <h4 className="id">Airport ID: {record.id}</h4>
              <h2 className="ident">{record.ident}</h2>
              <h2 className="type">Type: {record.type}</h2>
              <h1 className="name"> Airport Name: {record.name}</h1>
              <h1 className="region">
                Region Operational At: {record.iso_region}
              </h1>
              <h1 className="operating">
                Operating In Country: {record.iso_country}
              </h1>

              <h4 className="lat">Location[LAT]: {record.latitude_deg}</h4>
              <h4 className="long">Location[LON]: {record.longitude_deg}</h4>
              <h4 className="elev">
                {" "}
                Elevation from Sea Level: {record.elevation_ft}
              </h4>

              <h3 className="muni">Municipality: {record.municipality}</h3>
              <h3 className="continent">
                Continent Origin: {record.continent}
              </h3>
              <h3 className="iata">Aiport IATA Code: {record.iata_code}</h3>
              <h4 className="score">National Score: {record.score}</h4>
              <h4 className="updated">
                Last Updated At: {record.last_updated}
              </h4>
              <h5>
                <a href="#" className="web">
                  Website link: {record.home_link}
                </a>
              </h5>

              <h5>
                {" "}
                <a href="#" className="wiki">
                  Wekipedia link: {record.wikipedia_link}
                </a>
              </h5>

              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { Administration } from "../../components/Administration/Administration";
import { Airline } from "../../components/Airline/Airline";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { Version } from "../../components/Version/Version";

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Jumbotron
          administration={<Administration name="Tom Jones" />}
          version={<Version current="1.1.0" />}
        />
      </div>
      <div className="row">
        <Airline
          name={"American Airlines"}
          path={"/american-airlines/bidtypes"}
        />
        <Airline name={"Alaska Airlines"} path={"/alaska-airlines/bidtypes"} />
        <Airline
          name={"Frontier Airlines"}
          path={"/frontier-airlines/bidtypes"}
        />
        <Airline name={"UPS bidTypes"} path={"/ups/bidtypes"} />
      </div>
    </div>
  );
};

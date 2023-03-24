import React from "react";
import PropTypes from "prop-types";
import '../../index.css';
import Pilot from "../Pilot/Pilot";

function PilotList({ pilotDatas }) 
{

    return (
        <div className="bg-[#888888] w-full grid grid-cols-3 gap-5 p-3">
            {pilotDatas.map( pilotData => 
                <Pilot pilotData={pilotData} />
              )}

        </div>
    )
}
PilotList.propTypes = {
    pilotDatas: PropTypes.array.isRequired,
}

export default PilotList;
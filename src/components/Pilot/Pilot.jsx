import React from "react";
import PropTypes from "prop-types";
import '../../index.css';

function Pilot({ pilotData }) 
{

    return (
        <div className="bg-white w-full rounded-3xl flex p-3">
            <div className="w-1/3 ">
                <img className="w-2/3 mx-auto rounded-[50%]" src="/man.png" alt="man" />
                <h2 className="text-center mt-2">{`${pilotData.seat} ${pilotData.airline}`}</h2>
                <h2 className="text-center mt-2">{pilotData.domicile}</h2>
            </div>
            <div className="w-2/3">
                <h2 className="font-bold">{pilotData.firstName} {pilotData.lastName}</h2>
                <p className="mt-3">{`${pilotData.prefix} ${pilotData.suffix} ${pilotData.areacode}`}</p>
                <p className="font-bold mt-3">Twitter,Inc.</p>
                <p className="mt-3">{pilotData.address1}</p>
                <p className="mt-3">{pilotData.address2}</p>
                <p className="mt-3">P:(123)456-7890</p>
            </div>

        </div>
    )
}
propTypes: {
    pilotData: PropTypes.shape({
      id: PropTypes.number.isRequired,
      airline: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      areacode: PropTypes.string.isRequired,
      prefix: PropTypes.string.isRequired,
      suffix: PropTypes.string.isRequired,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
    })
}

export default Pilot;
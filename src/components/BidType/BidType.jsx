import React from "react";
import PropTypes from "prop-types";

function BidType({ bidData }) 
{

    return (
        <tr>
            <td className="text-center  items-center"><p>{bidData.id}</p></td>
            <td className="text-center">{bidData.airline}</td>
            <td className="text-center">{bidData.status === 0 ? "Current" : "Past" }</td>
            <td className="text-center">{bidData.numBidPeriods}</td>
            <td className="text-center">{bidData.importedOn}</td>
            <td className="px-3">
                <button className="w-full py-1 rounded-1 m-0  bg-blue-400">Retry Import</button>
                <button className="w-full py-1 rounded-1 m-0 mt-2 bg-blue-400">Bid Periods</button>
                <button className="w-full py-1 rounded-1 m-0 mt-2 bg-blue-400">Import History</button>
                <button className="w-full py-1 rounded-1 m-0 mt-2 bg-red-400">Delete</button>
            </td>

        </tr>
    )
}
propTypes: {
    bidData: PropTypes.shape({
      id: PropTypes.number.isRequired,
      airline: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      numBidPeriods: PropTypes.number.isRequired,
      importedOn: PropTypes.string.isRequired,
    })
}

export default BidType;
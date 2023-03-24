
import PropTypes from "prop-types";

import BidType from "../BidType/BidType";

function BidTypesList ( {bidTypes}) {

    return (
        <>
            
            <table align="content" className="table table-striped">
                <thead>
                    <tr>
                        <th className="w-1/6 text-center">ID</th>
                        <th className="w-1/6 text-center">Bid Types</th>
                        <th className="w-1/6 text-center">Status</th>
                        <th className="w-1/6 text-center">#bid Periods</th>
                        <th className="w-1/6 text-center">Last Import</th>
                        <th className="w-1/6 text-center"></th>
                    </tr>    
                </thead>
                <tbody>
                    {bidTypes.map(bidType => 
                        <BidType 
                            key = {bidType.id}
                            bidData={bidType} 
                        />    
                    )}    
                </tbody>   
            </table> 
        </>
    )
   

}

BidTypesList.propTypes =  {
    bidTypes: PropTypes.array.isRequired
}


export default BidTypesList;

import BidTypesList from "../../components/BidTypeList/BidTypeList";

export default function () {

  return (
    <div className="p-5">
      <h1 className="text-3xl  my-3">Bid Types</h1> 
      <BidTypesList
        bidTypes={data}
      />
    </div>
  )
}
const data = [
  {
    id: 1,
    airline: "AA",
    fleet: "73G",
    seat: "FO",
    domicile: "LAX",
    status: 0,
    numBidPeriods: 1,
    importedOn: "Nov 1 2017 12:00AM"
  },
  {
    id: 2,
    airline: "AA",
    fleet: "73G",
    seat: "FO",
    domicile: "LAX",
    status: 0,
    numBidPeriods: 1,
    importedOn: "Nov 1 2017 12:00AM"
  },
  {
    id: 3,
    airline: "AA",
    fleet: "73G",
    seat: "FO",
    domicile: "LAX",
    status: 0,
    numBidPeriods: 1,
    importedOn: "Nov 1 2017 12:00AM"
  },
  {
    id: 4,
    airline: "AA",
    fleet: "73G",
    seat: "FO",
    domicile: "LAX",
    status: 0,
    numBidPeriods: 1,
    importedOn: "Nov 1 2017 12:00AM"
  }
]
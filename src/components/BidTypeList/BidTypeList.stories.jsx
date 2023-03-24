import React from 'react';

import BidTypesList from './BidTypeList';

export default {
    component: BidTypesList,
    title: "BidTypesList"
}

const Templates = args => <BidTypesList {...args} />

export const Default = Templates.bind({});

Default.args = {
  bidTypes:[
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
    
  };
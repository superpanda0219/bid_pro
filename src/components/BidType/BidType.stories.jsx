import React from 'react';

import BidType from '.';

export default {
    component: BidType,
    title: "BidType"
}

const Templates = args => <BidType {...args} />

export const Default = Templates.bind({});

Default.args = {
    bidData: {
        id: 6,
        airline: "AA",
        fleet: "73G",
        seat: "FO",
        domicile: "LAX",
        status: 0,
        numBidPeriods: 1,
        importedOn: "Nov 1 2017 12:00AM"
    },
  };
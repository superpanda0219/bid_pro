import React from 'react';

import Pilot from './Pilot';

export default {
    component: Pilot,
    title: "Pilot"
}

const Templates = args => <Pilot {...args} />

export const Default = Templates.bind({});

Default.args = {
  pilotData: {
      id: 1,
      airline: "737",
      fleet: "73gG",
      seat: "CPT",
      domicile: "GEG",
      firstName: "John",
      lastName: "Smith",
      email: "superghost0621",
      areacode: "32/106",
      prefix: "Riviera",
      suffix: "State",
      address1: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Frabcusco",
      state: "CA 94107",
      postalCode: "94107",
    }
    
  };
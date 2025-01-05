const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000000', //b4c3e4e6-9053-42ce-b747-e281314baa31
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: '00000000-0000-0000-0000-offer0000001',
        title: 'Choose the radio station',
        price: 140
      },
      {
        id: '00000000-0000-0000-0000-offer0000002',
        title: 'Choose temperature',
        price: 160
      },
      {
        id: '00000000-0000-0000-0000-offer0000003',
        title: 'Drive me, bitch',
        price: 12000
      },
      {
        id: '00000000-0000-0000-0000-offer0000004',
        title: 'Stop here',
        price: 999999
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000005',
        title: 'Infotainment system',
        price: 20
      },
      {
        id: '00000000-0000-0000-0000-offer0000006',
        title: 'Order meal',
        price: 40
      },
      {
        id: '00000000-0000-0000-0000-offer0000007',
        title: 'Choose seats',
        price: 60
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000008',
        title: 'Book a taxi at the arrival point',
        price: 120
      },
      {
        id: '00000000-0000-0000-0000-offer0000009',
        title: 'Order a breakfast',
        price: 140
      },
      {
        id: '00000000-0000-0000-0000-offer0000010',
        title: 'Wake up at a certain time',
        price: 140
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000011',
        title: 'Choose meal',
        price: 20
      },
      {
        id: '00000000-0000-0000-0000-offer0000012',
        title: 'Choose seats',
        price: 140000
      },
      {
        id: '00000000-0000-0000-0000-offer0000017',
        title: 'Upgrade to comfort class',
        price: 1
      },
      {
        id: '00000000-0000-0000-0000-offer0000018',
        title: 'Upgrade to business class',
        price: 2
      },
      {
        id: '00000000-0000-0000-0000-offer0000019',
        title: 'Add luggage',
        price: 10
      },
      {
        id: '00000000-0000-0000-0000-offer0000020',
        title: 'Business lounge',
        price: 20
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000021',
        title: 'Choose the time of check-in',
        price: 76
      },
      {
        id: '00000000-0000-0000-0000-offer0000022',
        title: 'Choose the time of check-out',
        price: 126
      },
      {
        id: '00000000-0000-0000-0000-offer0000023',
        title: 'Add breakfast',
        price: 156
      },
      {
        id: '00000000-0000-0000-0000-offer0000024',
        title: 'Laundry',
        price: 171
      },
      {
        id: '00000000-0000-0000-0000-offer0000025',
        title: 'Order a meal from the restaurant',
        price: 125
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000026',
        title: 'Choose meal',
        price: 35
      },
      {
        id: '00000000-0000-0000-0000-offer0000027',
        title: 'Choose seats',
        price: 66
      },
      {
        id: '00000000-0000-0000-0000-offer0000028',
        title: 'Upgrade to comfort class',
        price: 173
      },
      {
        id: '00000000-0000-0000-0000-offer0000029',
        title: 'Add luggage',
        price: 117
      },
      {
        id: '00000000-0000-0000-0000-offer0000030',
        title: 'Business lounge',
        price: 199
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000031',
        title: 'With automatic transmission',
        price: 159
      },
      {
        id: '00000000-0000-0000-0000-offer0000032',
        title: 'With air conditioning',
        price: 78
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '00000000-0000-0000-0000-offer0000040',
        title: 'Choose live music',
        price: 123
      },
      {
        id: '00000000-0000-0000-0000-offer0000041',
        title: 'Choose VIP area',
        price: 186
      }
    ]
  },
];

function getOffersKeyValueByType(type, key) {
  const offersArray = mockOffers[mockOffers.findIndex((o) => o.type === type)].offers;
  return offersArray.map((item) => item[key]);
}

export { getOffersKeyValueByType };

const mockDestArray = [
  {
    id: '00000000-0000-0000-0000-dest00000000', //cfe416cq-10xa-ye10-8077-2fs9a01edcab
    description: 'Lyubertsy: the failed center of Russia, The city of Lyuberov',
    name: 'Lubertsy',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Lyubertsy House of Lyubery'
      }
    ]
  },
  {
    id: '00000000-0000-0000-0000-dest00000001',
    description: 'Gorkiy-17, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Gorkiy-17',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Gorkiy-17 hasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/14.jpg',
        description: 'Gorkiy-17 a perfect place to stay with a family'
      }
    ]
  },
  {
    id: '00000000-0000-0000-0000-dest00000002',
    description: 'Berlin - for those who value comfort and coziness',
    name: 'Berlin',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Berlin for those who value comfort and coziness'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Berlin a perfect place to stay with a family'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/15.jpg',
        description: 'Berlin with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    id: '00000000-0000-0000-0000-dest00000003',
    description: 'Havana - Havana Havana Havana Havana Havana y Havana',
    name: 'Havana',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Havana for those who value comfort and coziness'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Havana a perfect place to stay with a family'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Havana with an embankment of a mighty river as a centre of attraction'
      }
    ]
  }, {
    id: '00000000-0000-0000-0000-dest00000004',
    description: 'Reutov - Reutov Reutov Reutov Reutov Reutov and Reutov',
    name: 'Reutov',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Reutov for those who value comfort and coziness'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Reutov a perfect place to stay with a family'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/15.jpg',
        description: 'Reutov with an embankment of a mighty river as a centre of attraction'
      }
    ]
  }, {
    id: '00000000-0000-0000-0000-dest00000005',
    description: 'Lobnya - for those who value comfort and coziness',
    name: 'Lobnya',
    pictures: []
  },
  {
    id: '00000000-0000-0000-0000-dest00000005',
    description: 'Irkutsk Irkutsk Irkutsk Irkutsk Irkutsk Irkutsk Irkutsk',
    name: 'Irkutsk',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/21.jpg',
        description: 'Irkutsk for those who value comfort and coziness'
      }
    ]
  },
  {
    id: '00000000-0000-0000-0000-dest00000006',
    description: 'Lebedyan - Lebedyan Lebedyan Lebedyan Lebedyan Lebedyan and Lebedyan',
    name: 'Lebedyan',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/31.jpg',
        description: 'Lebedyan for those who value comfort and coziness'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/32.jpg',
        description: 'Lebedyan a perfect place to stay with a family'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/33.jpg',
        description: 'Lebedyan with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    id: '00000000-0000-0000-0000-dest00000007',
    description: 'Khimki - Khimki Khimki Khimki Khimki Khimki y Khimki',
    name: 'Khimki',
    pictures: [
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Khimki for those who value comfort and coziness'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Khimki a perfect place to stay with a family'
      },
      {
        src: 'https://22.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Khimki with an embankment of a mighty river as a centre of attraction'
      }
    ]
  }
];

function getDestKeyValueById(id, key) {
  return mockDestArray[mockDestArray.findIndex((o) => o.id === id)][key];
}

export { getDestKeyValueById };

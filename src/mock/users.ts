export const getUsersIn1KMRadius = (lat: number, lang: number) => {
  return [
    {
      id: '40d24b16-a473-4ea7-b369-bcb75c3ec5f1',
      name: 'John',
      location: {
        latitude: lat + 0.0008,
        longitude: lang + 0.0008,
      },
      image: 'https://i.pravatar.cc/300?40d24b16-a473-4ea7-b369-bcb75c3ec5f1',
    },
    {
      id: '0d9ae71d-18cc-4ebe-8c40-e64ab9ce2cbd',
      name: 'Patrick',
      location: {
        latitude: lat - 0.0008,
        longitude: lang - 0.0008,
      },
      image: 'https://i.pravatar.cc/300?0d9ae71d-18cc-4ebe-8c40-e64ab9ce2cbd',
    },
    {
      id: '726cd2de-92ae-4166-b05f-8a7ebc887a62',
      name: 'Bob',
      location: {
        latitude: lat + 0.0048,
        longitude: lang - 0.0008,
      },
      image: 'https://i.pravatar.cc/300?726cd2de-92ae-4166-b05f-8a7ebc887a62',
    },
    {
      id: '383d61d4-46b0-48ff-b98c-6c5b15ac6376',
      name: 'Lisa',
      location: {
        latitude: lat - 0.0027,
        longitude: lang + 0.00083,
      },
      image: 'https://i.pravatar.cc/300?383d61d4-46b0-48ff-b98c-6c5b15ac6376',
    },
    {
      id: 'f3488cd3-6b98-461f-953e-4ba1b812f302',
      name: 'Doe',
      location: {
        latitude: lat + 0.0001,
        longitude: lang + 0.0081,
      },
      image: 'https://i.pravatar.cc/300?f3488cd3-6b98-461f-953e-4ba1b812f302',
    },
    {
      id: 'd36f4d09-27ec-4f85-a02e-9e066e789e1f',
      name: 'Bob Doe',
      location: {
        latitude: lat + 0.00098,
        longitude: lang + 0.0081,
      },
      image: 'https://i.pravatar.cc/300?d36f4d09-27ec-4f85-a02e-9e066e789e1f',
    },
  ];
};

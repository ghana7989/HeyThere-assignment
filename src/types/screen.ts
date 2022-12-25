export type NearByUser = {
  id: string;
  name: string;
  location: Location;
  image: string;
};

export type Location = {
  latitude: number;
  longitude: number;
};

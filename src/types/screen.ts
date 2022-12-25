export type NearByUser = {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  image: string;
};

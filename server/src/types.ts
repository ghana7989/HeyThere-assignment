export interface ChatBody {
  _id: string;
  createdAt: Date;
  text: string;
  user: {
    _id: number;
    avatar?: undefined;
    name?: undefined;
  };
}

type ListingTypes = {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
};

export type ListingDataType = {
  ListingData: ListingTypes[];
};

type groupType = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
};

export type GroupDataType = {
  GroupData: groupType[];
};

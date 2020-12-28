export type IPost = {
  _id: string;
  uri: string;
  picture: string;
  title: string;
  description: string;
  author?: {
    name?: string;
    picture?: string;
  };
  createdAt: string;
  updatedAt: string;
};

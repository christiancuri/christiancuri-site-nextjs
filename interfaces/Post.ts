export type IPost = {
  _id: string;
  uri: string;
  picture: string;
  title: string;
  description: string;
  body: string;
  author?: {
    name?: string;
    picture?: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type IPostResponse = {
  data: IPost[];
  hasMore: boolean;
  pagination: {
    skip: number;
    limit: number;
  };
  total: number;
};

export type IPostPath = {
  uri: string;
};

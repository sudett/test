export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface CommentInterface {
  postId: number;
  it: number;
  name: string;
  email: string;
  body: string;
}

export type ModalDataType = {
  title: string;
  text: string;
  it: undefined | number;
};

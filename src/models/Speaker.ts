import { Data } from './Data';

export interface Speaker {
  id: number;
  name: string;
  profilePic: string;
  twitter: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  items: Data[];
}

// types.ts
export interface PropertyTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  address: string;
  cost: number;
  createdAt: string;
}

export type SelectedPropertyType = PropertyTypes | null;
export interface ContactTypes {
  name: string;
  number: string;
  message: string;
  contact_date: string;
}

export interface UsersType {
  name: string;
  phone: string;
  email: string;
}

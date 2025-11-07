export enum RequestStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Funded = 'Funded',
  Delivered = 'Delivered',
}

export enum ItemType {
  Fridge = 'Fridge',
  WashingMachine = 'Washing Machine',
  Stove = 'Stove',
  Microwave = 'Microwave',
  Heater = 'Heater',
  AirConditioner = 'Air Conditioner',
  Bed = 'Bed',
  Stroller = 'Stroller',
  Laptop = 'Laptop',
  WinterJackets = 'Winter Jackets',
}

export interface Charity {
  id: string;
  name: string;
  verified: boolean;
}

export interface Request {
  id: string;
  charity: Charity;
  familyName: string;
  itemType: ItemType;
  cost: number;
  fundedAmount: number;
  description: string;
  story: string;
  location: string;
  imageUrl: string;
  status: RequestStatus;
  urgency: 'High' | 'Medium' | 'Low';
}

export type NewRequestData = {
    familyName: string;
    itemType: ItemType;
    cost: number;
    story: string;
    location: string;
};
export interface PropertyTable {
  id: string;
  idOwner: string;
  ownerName: string;
  address: string;
  image: string;
  price: number;
  propertyName: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  price: number;
  codeInternal: string;
  year: number;
  ownerId: string;
  ownerName: string;
  ownerAddress: string;
  ownerPhoto: string;
  ownerBirthday: Date;
  images: Image[];
  traces: Trace[];
}

export interface Image {
  id: string;
  file: string;
  enabled: boolean;
}

export interface Trace {
  id: string;
  name: string;
  dateSale: Date;
  value: number;
  tax: number;
}

export interface PropertyFilter {
  Name: string;
  Address: string;
  MinPrice: number | null;
  MaxPrice: number | null;
}

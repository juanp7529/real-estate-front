import type { PropertyTable, Property } from '../../types/property';

export const mockPropertiesTable: PropertyTable[] = [
  {
    id: '1',
    idOwner: 'owner-1',
    ownerName: 'Juan Pérez',
    address: 'Calle 123 #45-67',
    image: 'https://example.com/image1.jpg',
    price: 250000000,
    propertyName: 'Casa Moderna',
  },
  {
    id: '2',
    idOwner: 'owner-2',
    ownerName: 'María García',
    address: 'Carrera 45 #12-34',
    image: 'https://example.com/image2.jpg',
    price: 350000000,
    propertyName: 'Apartamento Lujoso',
  },
];

export const mockPropertyDetail: Property = {
  id: '1',
  name: 'Casa Moderna',
  address: 'Calle 123 #45-67',
  price: 250000000,
  codeInternal: 'PROP-001',
  year: 2020,
  ownerId: 'owner-1',
  ownerName: 'Juan Pérez',
  ownerAddress: 'Calle 1 #2-3',
  ownerPhoto: 'https://example.com/owner1.jpg',
  ownerBirthday: new Date('1985-05-15'),
  images: [
    {
      id: 'img-1',
      file: 'https://example.com/image1.jpg',
      enabled: true,
    },
  ],
  traces: [],
};


import { http, HttpResponse } from 'msw';
import { mockPropertiesTable, mockPropertyDetail } from './data';

export const handlers = [
  http.get('/api/properties/filter', ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get('Name');
    const address = url.searchParams.get('Address');
    const minPrice = url.searchParams.get('MinPrice');
    const maxPrice = url.searchParams.get('MaxPrice');

    let filtered = [...mockPropertiesTable];

    if (name) {
      filtered = filtered.filter((p) =>
        p.propertyName.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (address) {
      filtered = filtered.filter((p) =>
        p.address.toLowerCase().includes(address.toLowerCase())
      );
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }

    return HttpResponse.json(filtered);
  }),

  http.get('/api/properties/:id', ({ params }) => {
    const { id } = params;

    if (id === '1') {
      return HttpResponse.json(mockPropertyDetail);
    }

    return HttpResponse.json(
      { message: 'Property not found' },
      { status: 404 }
    );
  }),
];


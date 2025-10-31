import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { PropertyService } from './properties.service';
import { server } from '../../test/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PropertyService', () => {
  describe('getAll', () => {
    it('debe obtener todas las propiedades sin filtros', async () => {
      const properties = await PropertyService.getAll();

      expect(properties).toHaveLength(2);
      expect(properties[0].propertyName).toBe('Casa Moderna');
      expect(properties[1].propertyName).toBe('Apartamento Lujoso');
    });

    it('debe filtrar por nombre', async () => {
      const properties = await PropertyService.getAll({
        Name: 'Casa',
        Address: '',
        MinPrice: null,
        MaxPrice: null,
      });

      expect(properties).toHaveLength(1);
      expect(properties[0].propertyName).toBe('Casa Moderna');
    });

    it('debe filtrar por dirección', async () => {
      const properties = await PropertyService.getAll({
        Name: '',
        Address: 'Carrera',
        MinPrice: null,
        MaxPrice: null,
      });

      expect(properties).toHaveLength(1);
      expect(properties[0].address).toContain('Carrera');
    });

    it('debe filtrar por precio mínimo', async () => {
      const properties = await PropertyService.getAll({
        Name: '',
        Address: '',
        MinPrice: 300000000,
        MaxPrice: null,
      });

      expect(properties).toHaveLength(1);
      expect(properties[0].price).toBeGreaterThanOrEqual(300000000);
    });

    it('debe filtrar por precio máximo', async () => {
      const properties = await PropertyService.getAll({
        Name: '',
        Address: '',
        MinPrice: null,
        MaxPrice: 300000000,
      });

      expect(properties).toHaveLength(1);
      expect(properties[0].price).toBeLessThanOrEqual(300000000);
    });
  });

  describe('getById', () => {
    it('debe obtener una propiedad por ID', async () => {
      const property = await PropertyService.getById('1');

      expect(property.id).toBe('1');
      expect(property.name).toBe('Casa Moderna');
      expect(property).toHaveProperty('images');
      expect(property).toHaveProperty('traces');
    });

    it('debe manejar error cuando la propiedad no existe', async () => {
      await expect(PropertyService.getById('999')).rejects.toThrow();
    });
  });
});


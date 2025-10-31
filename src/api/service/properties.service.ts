import type { Property, PropertyFilter, PropertyTable } from '../../types/property';
import axiosInstance from '../config/axiosInstance';

export const PropertyService = {
  async getAll(params?: PropertyFilter): Promise<PropertyTable[]> {
    const { data } = await axiosInstance.get(`/properties/filter`, { params });
    return data;
  },

  async getById(id: string): Promise<Property> {
    const { data } = await axiosInstance.get(`/properties/${id}`);
    return data;
  },
};

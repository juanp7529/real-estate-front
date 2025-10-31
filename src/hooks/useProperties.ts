import { useEffect, useState } from 'react';
import { PropertyService } from '../api/service/properties.service';
import type { PropertyTable, PropertyFilter } from '../types/property';

export const useProperties = (filters?: PropertyFilter) => {
  const [properties, setProperties] = useState<PropertyTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await PropertyService.getAll(filters);
        setProperties(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]);

  return { properties, loading, error };
};

import { useQuery } from '@tanstack/react-query';
import data from '../data/data.json';
import { MoviesData } from '../types/types';

export const useMovies = () => {
    return useQuery<MoviesData>({
        queryKey: ['movies'],
        queryFn: async () => {
            return new Promise<MoviesData>((resolve) => {
                setTimeout(() => resolve(data), 300);
            });
        }
    });
};

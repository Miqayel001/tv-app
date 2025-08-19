import React, { useEffect, useState } from 'react';
import { useMovies } from '../hooks/useMovies';
import { TrendingMovie } from '../types/types';
import { getLastSeenMovies, setLastSeenMovies } from '../utils/storage';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import TrendingCarousel from '../components/TrendingCarousel/TrendingCarousel';


const HomePage = () => {

    const { data } = useMovies();
    const [featured, setFeatured] = useState<TrendingMovie | null>(null);
    const [trendingList, setTrendingList] = useState<TrendingMovie[]>([]);


    useEffect(() => {
        if (data) {
            let trendingMovies = data.TendingNow
                .slice()
                .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
                .slice(0, 50);

            const lastSeenIds = getLastSeenMovies();

            trendingMovies.sort((a, b) => {
                const aIndex = lastSeenIds.indexOf(a.Id);
                const bIndex = lastSeenIds.indexOf(b.Id);

                if (aIndex === -1 && bIndex === -1) return 0;
                if (aIndex === -1) return 1;
                if (bIndex === -1) return -1;
                return aIndex - bIndex;
            });

            setTrendingList(trendingMovies);

            const lastSeenId = lastSeenIds.length ? lastSeenIds[0] : null;
            if (lastSeenId) {
                const lastSeen = trendingMovies.find(m => m.Id === lastSeenId);
                if (lastSeen) {
                    setFeatured(lastSeen);
                    return;
                }
            }
            setFeatured(data.Featured as TrendingMovie);
        }
    }, [data]);

    const handleSelectMovie = (movie: TrendingMovie) => {
        setFeatured(movie);
        setLastSeenMovies(movie.Id);
    };



    return (
        <>
            {featured && <FeaturedSection movie={featured} />}
            <section>
                <TrendingCarousel movies={trendingList} onSelect={handleSelectMovie} />
            </section>
        </>
    );
};

export default HomePage;

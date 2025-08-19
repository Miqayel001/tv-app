import React from 'react';
import { TrendingMovie } from '../../types/types';
import './TrendingCarousel.css';

interface TrendingCarouselProps {
    movies: TrendingMovie[];
    onSelect: (movie: TrendingMovie) => void;
}

const TrendingCarousel: React.FC<TrendingCarouselProps> = ({ movies, onSelect }) => {
    return (
        <div className="trending-carousel">
            {movies.slice(0, 8).map((movie) => (
                <div
                    key={movie.Id}
                    className="carousel-item"
                    onClick={() => onSelect(movie)}
                >
                    <img
                        src={`/assets/${movie.CoverImage}`}
                        alt={movie.Title}
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
};

export default TrendingCarousel;

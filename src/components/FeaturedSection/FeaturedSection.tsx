import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { TrendingMovie } from '../../types/types';
import './FeaturedSection.css';


interface Props {
    movie: TrendingMovie;
}

const FeaturedSection: React.FC<Props> = ({ movie }) => {

    const [showVideo, setShowVideo] = useState(false);
    const defaultVideoUrl = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

    useEffect(() => {
        setShowVideo(false);

        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [movie.Id]);



    return (
        <div className="featured-section">
            {showVideo ? (
                <video
                    src={movie.VideoUrl ? movie.VideoUrl : defaultVideoUrl}
                    autoPlay
                    muted
                    loop
                    className="featured-video"
                />
            ) : (
                <img
                    src={`/assets/${movie.CoverImage}`}
                    alt={movie.Title}
                    className="featured-image"
                />
            )}

            <div className="featured-overlay">
                <img
                    src={`/assets/${movie.TitleImage}`}
                    alt={movie.Title}
                    className="movie-logo"
                />
                {movie.Title}
                <div className="movie-details">
                    <p>
                        {movie.Category} • {movie.ReleaseYear} • {movie.MpaRating} •{' '}
                        {Math.floor(Number(movie.Duration) / 60)} min
                    </p>
                    <p className="description">{movie.Description}</p>

                    <div className="buttons">
                        <Button type="primary" icon={<PlayCircleOutlined />} size="large">
                            Play
                        </Button>
                        <Button icon={<InfoCircleOutlined />} size="large">
                            More Info
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;

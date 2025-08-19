export interface FeaturedMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
}

export interface TrendingMovie extends FeaturedMovie {
    VideoUrl: string;
}

export interface MoviesData {
    Featured: FeaturedMovie;
    TendingNow: TrendingMovie[];
}

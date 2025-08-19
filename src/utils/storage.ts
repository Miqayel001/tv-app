export const getLastSeenMovies = (): string[] => {
    const stored = sessionStorage.getItem('lastSeenMovies');
    return stored ? JSON.parse(stored) : [];
};

export const setLastSeenMovies = (id: string) => {
    let seen = getLastSeenMovies();
    seen = seen.filter(item => item !== id);
    seen.unshift(id);
    sessionStorage.setItem('lastSeenMovies', JSON.stringify(seen));
};
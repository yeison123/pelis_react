
export function ListMovies ({movies}) {
    return (
        <ul>
        {
            movies.map(
                movie => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                )
            )
        }
    </ul>
    )
}

export function NoMuviesResults () {
    return (
        <p>No se encontraron resultados.</p>
    )
}

export function Movies ({movies}) {
   
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListMovies movies={movies}/>
            : <NoMuviesResults />
    )
}
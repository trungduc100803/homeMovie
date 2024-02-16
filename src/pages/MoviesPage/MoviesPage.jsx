import { useEffect, useState } from 'react';


import tmdbApi, { movieType, category } from '../../api/tmdbApi';


import './MoviesPage.scss'
import Button from '../../component/Button/Button'
import Moviescard from '../../component/MoviesCard/MoviesCard'




function MoviesPage() {

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)

    const viewMore = async () => {
        setPage(page + 1)
        const params = {
            page: page
        }
        const res = await tmdbApi.getMoviesList(movieType.popular, { params })
        setItems(prevItem => { return [...prevItem, ...res.results] })
    }


    const getMovie = async (params) => {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params })
        setItems(res.results)
    }
    useEffect(
        () => {
            const params = {
                page: page
            }
            getMovie(params)

        }, []
    )



    return (
        <div className='movies-page'>
            <h1 className="movies-heading">Movies</h1>
            <div className="movies-content">
                {
                    items.map((item, i) => (
                        <div key={i} className="card">
                            <Moviescard item={item} category={category.movie} />
                        </div>
                    ))
                }
            </div>
            <div className="view-more-movie">
                <Button onClick={viewMore} className='tv-btn' type={true}>View more</Button>
            </div>
        </div>
    )
}

export default MoviesPage;
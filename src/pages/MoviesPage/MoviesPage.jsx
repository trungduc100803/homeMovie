import { useEffect, useState } from 'react';


import tmdbApi, { movieType, category } from '../../api/tmdbApi';


import './MoviesPage.scss'
import Button from '../../component/Button/Button'
import Moviescard from '../../component/MoviesCard/MoviesCard'




function MoviesPage() {

    const [items, setItems ] =  useState([])
    const [ page, setPage ]  = useState(1)
    
    const viewMore = () => {
        const params = {
            page: page 
        }
        const getMovie = async () => {
            const res = await tmdbApi.getMoviesList(movieType.popular, {params})
            console.log(page)
            setItems(res.results)
        }
        getMovie()
        setPage(page + 1)
    }


    useEffect(
        () => {
            const params = {
                page: page
            }
            const getMovie = async () => {
                const res = await tmdbApi.getMoviesList(movieType.popular, {params})
                setItems(res.results)
            }
            getMovie()
            
        },[]
        )
    
    
        
        return (  
            <div className='movies-page'>
                <h1 className="movies-heading">Movies</h1>
                <div className="movies-content">
                    {
                        items.slice(0,18).map((item, i) => (
                            <div key={i} className="card">
                                <Moviescard item={item} category={category.movie}/>
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
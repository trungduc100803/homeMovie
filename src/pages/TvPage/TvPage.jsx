
import { useEffect, useState } from 'react';


import tmdbApi, {  category, tvType } from '../../api/tmdbApi';


import './TvPage.scss'
import Button from '../../component/Button/Button'
import Moviescard from '../../component/MoviesCard/MoviesCard'



function TvPage() {

    
    const [items, setItems ] =  useState([])

    useEffect(
        () => {
            const params = {}
            const getTv = async () => {
                const res = await tmdbApi.getTvList(tvType.popular, {params})
                setItems(res.results)
            }
            getTv()
            
        },[]
        )
        

    return (  
        <div className="tv-page">

            <h2 className="tv-heading">
                Tv Series
            </h2>
            <div className="tv-content">

                {
                    items.slice(0,18).map((item, i) => (
                        <div key={i} className="card">
                            <Moviescard item={item} category={category.tv}/>
                        </div>
                    ))
                }
            </div>
            <div className="view-more-tv">
                <Button className='tv-btn' type={true}>View more</Button>
            </div>
        </div>
    )
}

export default TvPage;
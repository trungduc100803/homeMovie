import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import './Detail.scss'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Casts from '../../component/Casts/Casts';
import Videos from '../../component/Videos/Videos';
import MoviesList from '../../component/MoviesList/MoviesList'


function Detail() {

    const { category, id} = useParams()

    const [item, setItem] = useState([])

    useEffect(
        () => {
            const getitems = async () => {
                const res = await tmdbApi.detail(category, id)
                window.scrollTo(0, 0)
                setItem(res)
            }
            getitems()
        },
        [category, id]
        )
        
    const bg = apiConfig.originalImage(item.backdrop_path) || apiConfig.originalImage(item.poster_path)
    const pos = apiConfig.w500Image(item.poster_path) || apiConfig.w500Image(item.backdrop_path)


    return (  
        <>
            {
                item && (
                    <>
                        <div className="detail">
                            <div 
                                className="bg" 
                                style={{backgroundImage: `url(${bg})`}}
                            ></div>
                            <div className="detail-content">
                                <div className="container">
                                    <div className="content-img">
                                        <img className='img' src={pos} alt="poster" />
                                    </div>
                                    <div className="info">
                                        <h1 className="name">{item.original_title || item.name}</h1>
                                        <p className="para">{item.overview}</p>
                                        <div className="castss">
                                            <h2 className="heading-cast">Casts</h2>
                                            <Casts/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="videos">
                            <Videos/>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Detail;
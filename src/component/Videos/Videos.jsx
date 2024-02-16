import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Videos.scss'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


function Videos() {

    const { category, id } = useParams()

    const [ videos, setVideos ] = useState([])

    useEffect(
        () => {
            const getVideo = async () => {
                const res = await tmdbApi.getVideos(category, id)
                setVideos(res.results)
            }   
            getVideo()
        },
        [category, id]
    )

    
    return (  
        <div className="video-container">
            {
                videos.slice(0, 4).map((video, i) => {

                    const link = `https://www.youtube.com/embed/${video.key}`
                    return (

                        <div className='video-item'>
                            <h2 className="video-title">{video.name}</h2>
                            <iframe src={link} frameborder="0"></iframe>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Videos;
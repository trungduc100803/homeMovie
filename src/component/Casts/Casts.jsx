import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Casts.scss'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

function Casts() {

    const { category, id } = useParams()

    const [ casts, setCasts ] = useState([])

    useEffect(
        () => {
            const getCasts = async () => {
                const res = await tmdbApi.credits(category, id)
                setCasts(res.cast)
            }
            getCasts()
        },
        [category, id]
    )
    
    
    return (  
        <div className="casts">
            {
                casts.slice(0, 5).map((cast, i) => (
                    <div className="cast">
                        <img src={apiConfig.w500Image(cast.profile_path)} alt="" />
                        <p>{cast.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Casts;
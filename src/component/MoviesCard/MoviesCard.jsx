import { Link } from 'react-router-dom'

import './MoviesCard.scss'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/tmdbApi'

function MoviesCard(props) {
    
    const item = props.item
    const link = '/'  + category[props.category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path ? item.poster_path : item.backdrop_path)

    return (  
        <Link to={link}>
            <div  className="movies-card" >
                <img src={bg} alt="" className="card-img" />
            </div>
        </Link>
    )
}

export default MoviesCard;
import { category, tvType, movieType } from '../../api/tmdbApi';


import './Home.scss'
import Button from '../../component/Button/Button';
import HeroSlide from '../../component/HeroSlide/HeroSlide';
import MoviesList from '../../component/MoviesList/MoviesList';

function Home() {
    return (
        <div className="home">
            <HeroSlide/>
            <div className="container">
                <div className="mo-list">
                    <div className="mo-header">
                        <p className="mo-heading">Trending Movies</p>
                        <div className="btn-control__item btn-control__item-mb1">
                            <Button type={true}>View more</Button>
                        </div>
                    </div>
                    <MoviesList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="mo-list">
                    <div className="mo-header">
                        <p className="mo-heading">Top Rated Movies</p>
                        <div className="btn-control__item btn-control__item-mb1">
                            <Button type={true}>View more</Button>
                        </div>
                    </div>
                    <MoviesList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="mo-list">
                    <div className="mo-header">
                        <p className="mo-heading">Trending TV</p>
                        <div className="btn-control__item btn-control__item-mb1">
                            <Button type={true}>View more</Button>
                        </div>
                    </div>
                    <MoviesList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="mo-list">
                    <div className="mo-header">
                        <p className="mo-heading">Top Rated TV</p>
                        <div className="btn-control__item btn-control__item-mb1">
                            <Button type={true}>View more</Button>
                        </div>
                    </div>
                    <MoviesList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
import {createStore} from 'vuex'
import upcoming from "@/store/modules/upcoming";
import popularMovies from "@/store/modules/popularMovies";
import popularTvs from "@/store/modules/popularTvs";
import topRate from "@/store/modules/topRate";
import movie from "@/store/modules/movie";
import tv from "@/store/modules/tv";
import actor from "@/store/modules/actor";
import searching from "@/store/modules/searching";
const store = createStore({
    state: {
        apiKey: '4c3617d8bb2243423cf0ed43c6bab4df',
        imageFullUrl: 'https://image.tmdb.org/t/p/original/',
        imageUrl: 'https://image.tmdb.org/t/p/w500/'
    },
    modules:{
        upcoming, 
        popularMovies,
        popularTvs,
        topRate,
        movie,
        tv,
        actor,
        searching
    }
})

export default store
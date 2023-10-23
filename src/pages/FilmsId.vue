<template>
  <div class="main" v-if="movie">
    <div class="main__contentId">
      <div class="main__media">
        <img :src="imageFullUrl + movie.backdrop_path" alt="" class="main__media-poster">
        <div class="main__media-block">
          <div class="main__media-left">
            <h1 class="main__media-left-title">{{ movie.title }}</h1>
            <p class="main__media-left-text">{{ movie.overview }}</p>
            <p class="main__media-left-janr">
              <span class="main__media-date">
                {{
                   new Date(movie.release_date).getFullYear() 
                }},
              </span>
              <span
                v-for="(genres, idx) in movie.genres"
                :key="genres.id"
              >
                {{ genres.name }}
                <span v-if="idx < movie.genres.length - 1"> , </span>
              </span>
            </p>
          </div>
          <div class="main__media-right">
            <img :src="imageFullUrl + movie.poster_path" alt="">
          </div>
          <div class="main__media-actors">
            <h2 class="main__media-title">В главных ролях</h2>
            <div class="main__media-casts">
              <Actor type="/movie/" :id="movie.id" count="6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import { mapState, mapActions } from "vuex";
export default {
  computed:{
     ...mapState('movie', ['movie']),
     ...mapState(['imageFullUrl'])
  },
   methods:{
    ...mapActions('movie', ['getMovieById']),
   },
  async mounted(){
    this.getMovieById(this.$route.params.id)
   }
}
</script>

<style>

</style>
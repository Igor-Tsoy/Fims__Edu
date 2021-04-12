<template>
  <BContainer>
    <h3 class="list-title">{{ listTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, index) in list" :key="index">
          <MovieItem
            :movie="movie"
            @mouseover.native="changeBg(movie.Poster)"
            @removeMovie="onRemoveMovie"
          />
        </BCol>
      </template>
      <template v-else>
        <div>
          Movies net Chto-to ne tak
        </div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import MovieItem from './MovieItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MoviesList',
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters('movies', ['titleState']),
    listTitle() {
      return this.titleState ? 'Search result' : 'IMDB Top 250';
    }
  },
  methods: {
    changeBg(poster) {
      this.$emit('changePoster', poster);
    },
    ...mapActions('movies', ['removeMovie']),
    async onRemoveMovie({ id, title }) {
      const removeConfirm = await this.$bvModal.msgBoxConfirm(
        `Are you sure you want to delete ${title}`
      );
      if (removeConfirm) {
        this.removeMovie(id);
      }
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>

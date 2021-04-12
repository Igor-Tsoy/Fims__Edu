<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-info-item">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.year }}</span>
      </div>
      <div class="contols row no-gutters">
        <div class="col pr-2">
          <BButton size="md" block variant="outline-light">
            Edit
          </BButton>
        </div>
        <div class="col pl2">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="emitRemoveMovie"
          >
            Remove
          </BButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterBg() {
      return {
        'background-image': `url(${this.movie.Poster})`
      };
    }
  },
  methods: {
    emitRemoveMovie() {
      this.$emit('removeMovie', {
        id: this.movie.imdbID,
        title: this.movie.Title
      });
    }
  }
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 370px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.6);
  transform: scale(1.03);
}

.movie-item-poster {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movie-info-wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  opacity: 0;
  transition: all 0.2s ease;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-style: 16px;
  color: #fff;
}
</style>

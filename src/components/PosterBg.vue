<template>
  <div class="poster-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: 'PosterBg',
  props: {
    poster: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    defaultPoster:
      'radial-gradient( circle farthest-corner at 16.5% 28.1%, rgba(15,27,49,1) 0%, rgba(0,112,218,1) 90% )'
  }),
  computed: {
    posterBg() {
      if (this.poster) {
        return `url(${this.poster})`;
      } else {
        return this.defaultPoster;
      }
    },
    posterStyle() {
      return {
        'background-image': this.posterBg
      };
    }
  }
};
</script>

<style scoped>
.poster-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s ease;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -2;
}

.poster-bg::before {
  content: '';
  opacity: 0.7;
  background-image: radial-gradient(
    circle farthest-corner at 16.5% 28.1%,
    rgba(15, 27, 49, 1) 0%,
    rgba(0, 112, 218, 1) 90%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>

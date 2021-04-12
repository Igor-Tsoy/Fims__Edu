<template>
  <div class="loader-wrap" v-if="loaderState">
    <BSpinner type="grow" variant="light" label="Loading..." />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Loader',
  computed: {
    ...mapGetters(['loaderState'])
  }
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>

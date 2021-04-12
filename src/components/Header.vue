<template>
  <header class="header">
    <BNavbar class="navbar" type="dark" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BNavForm>
          <BFormInput
            debounce="500"
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="searchValue"
          ></BFormInput>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    searchValue: ''
  }),
  watch: {
    searchValue: 'searchHandler'
  },
  methods: {
    searchHandler(searchVal) {
      this.searchMovie(searchVal);
    },
    ...mapActions('movies', ['searchMovie'])
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.search-input {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.6);
}
</style>

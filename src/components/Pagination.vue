<template>
  <div class="movies-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageComp"
      :total-rows="total"
      :per-page="perPage"
      limit="8"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    }
  },
  computed: {
    currentPageComp: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit('changePage', value);
      }
    }
  }
};
</script>

<style scoped>
.movies-pagination {
  margin-top: 30px;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  background: #fff;
  color: #000;
}
</style>

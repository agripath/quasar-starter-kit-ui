<template>
  <q-page
    padding
    class="row justify-center"
  >
    <q-list
      dense
      class="list"
    >
      <div class="text-h4 q-mb-md">Test pages</div>

      <q-input
        v-model="search"
        placeholder="search"
        outlined
        dense
        class="q-mb-md"
        style="max-width: 300px;"
        clearable
        autofocus
        @keypress.13="onEnter"
      />

      <q-item
        v-for="page in filteredPages"
        :key="page.path"
        :to="page.path"
      >
        <q-item-section avatar>
          <q-icon name="pages" />
        </q-item-section>
        <q-item-section>
          {{ page.title }}
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import pages from '../router/pages'

export default {
  created () {
    this.pages = pages
  },

  data () {
    return {
      search: ''
    }
  },

  methods: {
    onEnter () {
      if (this.filteredPages.length) {
        this.$router.push(this.filteredPages[0].path)
      }
    }
  },

  computed: {
    filteredPages () {
      if (!this.search) {
        return this.pages
      }

      return this.pages.filter(page => {
        return page.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.list
  width: 700px
  max-width: 100%
</style>

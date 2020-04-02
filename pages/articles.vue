<template>
  <div>
    <h1 class="title">
      Articles
    </h1>
    <h2 class="subtitle">
      I am listing here the articles which I found really useful
    </h2>
    <b-tabs type="is-toggle is-fullwidth">
      <b-tab-item v-for="articleByCategory in articles" :key="articleByCategory.id">
        <template slot="header">
          <b-icon :icon="articleByCategory.icon" />
          <span> {{ articleByCategory.name }} <b-tag rounded> {{ articleByCategory.list.length }} </b-tag> </span>
        </template>
        <div class="box">
          <ul>
            <li v-for="article in articleByCategory.list" :key="article.id">
              <a :href="article.url" target="_blank">{{ article.title }}</a>
            </li>
          </ul>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { getArticles } from '../api/articles'

export default {
  name: 'Articles',
  data () {
    return {
      title: 'Articles',
      articles: []
    }
  },
  async mounted () {
    const articlesRes = await getArticles()
    if (!articlesRes.success) {
      this.articles = []
      // notify articlesRes.message
    } else {
      this.articles = articlesRes.data
    }
  },
  head () {
    return {
      title: 'Articles - Laszlo Hornyak',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Favourite articles of Laszlo Hornyak'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

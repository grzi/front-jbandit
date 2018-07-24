<template>
  <div>
    <jHighlights
    v-bind:trendings='page.trendingArticles'
    v-bind:lastArticle='page.lastArticle'
    ></jHighlights>
    <div class='container'>
      <div class='row'>
        <div class='col s12 m12 l6 '>
          <div class='padding-min'>
            <jSection v-bind:articles='page.billets' v-bind:titleSection='"Les derniers billets"'></jSection>
          </div>
        </div>
        <div class='col s12 m12 l6 '>
          <div class='padding-min'>
            <jSection v-bind:articles='page.tutorials'  v-bind:titleSection='"Les derniers tutoriels"'></jSection>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type = 'text/javascript' >

import ArticleHighlights from '@/components/home/ArticleHighlights'
import ArticleSection from '@/components/home/ArticleSection'

export default {
  name: 'Home',
  components: {
    'jHighlights': ArticleHighlights,
    'jSection': ArticleSection
  },
  props: ['page'],
  mounted () {
    document.title = 'jBandit - Accueil'
  }
}

</script>
<style/>

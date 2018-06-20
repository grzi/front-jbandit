<template>
  <div>
    <div class="titleSection">
      <h6>Je vais avoir un petit truc</h6>
    </div>

    <jArticleInline></jArticleInline>
    <jArticleInline></jArticleInline>
    <jArticleInline></jArticleInline>
    <jArticleInline></jArticleInline>
    <jArticleInline></jArticleInline>

    <div class="moreArticles"><a>Voir plus d'article</a></div>
  </div>
</template>

<script type = "text/javascript" >
import ArticleInline from '@/components/home/ArticleInline'
export default {
  name: 'ArticleSection',
  components: {
    'jArticleInline': ArticleInline
  },
  data () {
    return {

    }
  }
}

</script>
<style>
.moreArticles{margin-top:10px;}
.titleSection{border-bottom:1px solid #e91e63;padding-bottom:10px;}
</style>

<template>
  <div>
    <jHeader v-bind:data='page'></jHeader>
    <jMenu v-bind:menus='page.menus'></jMenu>
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
    <jFooter></jFooter>
  </div>
</template>

<script type = 'text/javascript' >
import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import ArticleHighlights from '@/components/home/ArticleHighlights'
import ArticleSection from '@/components/home/ArticleSection'
import Footer from '@/components/commons/Footer'

export default {
  name: 'Home',
  components: {
    'jHeader': Header,
    'jMenu': Menu,
    'jHighlights': ArticleHighlights,
    'jSection': ArticleSection,
    'jFooter': Footer
  },
  data () {
    return {
      'page': {
        'title': '',
        'description': '',
        'menus': [
          {
            'name': '',
            'link': '',
            'iconImage': ''
          }
        ],
        'lastArticle': {
          'title': '',
          'link': '',
          'img': '',
          'descr': '',
          'date': '',
          'theme': '',
          'type': ''
        },
        'trendingArticles': [
          {
            'title': '',
            'link': '',
            'img': '',
            'descr': '',
            'date': '',
            'theme': '',
            'type': ''
          }],
        'tutorials': [
          {
            'title': '',
            'link': '',
            'img': '',
            'descr': '',
            'date': '',
            'theme': '',
            'type': ''
          }
        ],
        'billets': [
          {
            'title': '',
            'link': '',
            'img': '',
            'descr': '',
            'date': '',
            'theme': '',
            'type': ''
          }
        ]
      }
    }
  },
  beforeMount () {
    this.$axios(
      { method: 'GET', 'url': '/api/public/navigation/home' }
    ).then(
      result => { console.log(result); this.page = result.data },
      error => { console.error(error) }
    )
  }
}
</script>
<style/>

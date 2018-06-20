<template>
  <div>
    <jHeader></jHeader>
    <jMenu></jMenu>
    <jHighlights></jHighlights>
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l6 ">
          <div class="padding-min">
            <jSection></jSection>
          </div>
        </div>
        <div class="col s12 m12 l6 ">
          <div class="padding-min">
            <jSection></jSection>
          </div>
        </div>
      </div>
    </div>
    <jFooter></jFooter>
  </div>
</template>

<script type = "text/javascript" >
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

    }
  }
}

</script>
<style/>

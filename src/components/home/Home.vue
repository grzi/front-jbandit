<template>
  <div>
    <jHeader></jHeader>
    <jMenu></jMenu>
    <highlights></highlights>
  </div>
</template>

<script type = "text/javascript" >
import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import ArticleHighlights from '@/components/home/ArticleHighlights'
export default {
  name: 'Home',
  components: {
    'jHeader': Header,
    'jMenu': Menu,
    'highlights': ArticleHighlights
  },
  data () {
    return {

    }
  }
}

</script>
<style/>

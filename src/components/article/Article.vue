<template>
  <div>
    test
  </div>
</template>

<script>
import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import Footer from '@/components/commons/Footer'

export default {
  name: 'Article',
  components: {
    'jHeader': Header,
    'jMenu': Menu,
    'jFooter': Footer
  },
  mounted () {
    document.title = 'Lecture d\'un article . . .'
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <jHeader v-bind:data='page'></jHeader>
    <jMenu v-bind:menus='page.menus'></jMenu>
    <router-view v-bind:page='page' ></router-view>
    <jFooter></jFooter>
  </div>
</template>

<script>
import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import Footer from '@/components/commons/Footer'
export default {
  name: 'App',
  components: {
    'jHeader': Header,
    'jMenu': Menu,
    'jFooter': Footer
  },
  data: function () {
    return {
      page: {
        menus: {

        }
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

<style>
#app {
  font-family: 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

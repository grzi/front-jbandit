<template>
  <div class="row grey lighten-3 margin-top-default">
    ff
  </div>
</template>

<script type = "text/javascript" >
import M from 'materialize-css'
export default {
  name: 'ArticlesHighlights',
  mounted () {
    var elem = document.querySelector('.carousel')
    // eslint-disable-next-line
    M.Carousel.init(elem,{
      fullWidth: true
    })
  },
  data () {
    return {

    }
  }
}

</script>
<style>
</style>

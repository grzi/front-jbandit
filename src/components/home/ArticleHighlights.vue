<template>
  <div class="grey lighten-3 margin-top-default">
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l8">
          <div class="padding-min">
            <div class="article">
              <img style="width:100%" src="/static/image/blog1.jpg"/>
              <div class="bubble">Kotlin</div>
            </div>
          </div>
        </div>
        <div class="col hide-on-med-and-down m4 padding-min">
          <div class="padding-min">
            <div class="article-medium">
              <img style="width:100%" src="/static/image/blog2.jpeg"/>
            </div>
            <div class="margin-top-default">
                <div><b>Un truc ici ... </b></div>
                <div>D'autres trucs ici ... Qui peuvent éventuellement donner des trucs vraiments cools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.article{position:relative;}
.bubble{position:absolute;top:0px;background:#e91e63;right:20px;padding:10px;color:white;opacity:0.8}
.article-medium{width:300px;height:180px;position:relative;}
</style>

<template>
  <div class="grey lighten-3 margin-top-default">
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l8">
          <div class="padding-min">

            <div class="carousel carousel-slider center">
              <div class="carousel-item" v-for="article in trendings" v-bind:key="article.link">
                <div class="article" >
                  <img style="width:100%" :src="'/static/image/' + article.img"/>
                  <div class="bubble">{{article.theme}}</div>
                  <div class="article-title"><a>{{article.title}}</a></div>
                  <div class="article-descr">{{article.descr}}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col hide-on-med-and-down m4 padding-min">
          <div class="padding-min">
            <div class="article-medium">
              <img style="width:100%" src="/static/image/blog2.jpeg"/>
            </div>
            <div class="margin-top-default">
              <div><a><b>{{lastArticle.title}}</b></a></div>
              <div>{{lastArticle.descr}}</div>
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
  updated () {
    var elem = document.querySelector('.carousel')
    // eslint-disable-next-line
    var instance = M.Carousel.init(elem,{
      fullWidth: true
    })
    setInterval(function () { instance.next() }, 6000)
    elem.setAttribute('style', 'height : ' + elem.offsetWidth * 325 / 578 + 'px') // Calcul magique..
  },
  props: ['lastArticle', 'trendings']
}

</script>
<style>
 .carousel{height:342.67px;}
.article{position:relative;}
.bubble{position:absolute;top:0px;background:#e91e63;right:20px;padding:10px;color:white;opacity:0.8}
.article-medium{width:300px;height:180px;position:relative;}
.article-title{text-transform:capitalize;position:absolute;bottom:89px;font-size:20px;font-weight:bold;color:white;background:black;padding:10px;opacity:0.8;}
.article-descr{text-transform:capitalize;position:absolute;bottom:52px;font-size:12px;color:white;background:#222222;padding:10px;opacity:0.8;right:0px;}

@media only screen and (max-width : 992px) {
  .article-title{bottom:0px;width:100%;font-size:inherit;padding-bottom:15px;}
  .article-descr{display:none}
}
@media only screen and (max-width : 420px) {
  .article-title{font-size:14px;padding-bottom:15px;background:transparent;text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;bottom:38px !important;top:auto;}
  .article-descr{display:none}
}
.article-title a{cursor:pointer;color:white}
.article-title a:hover{text-decoration: underline;}
.previous{position:absolute;background:#999;color:white;padding:10px;opacity:0.6;z-index:10;top:60px;}
.next{position:absolute;background:#999;color:white;padding:10px;opacity:0.6;z-index:10;top:60px;right:0px}
</style>

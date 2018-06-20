<template>
  <div class="grey lighten-3 margin-top-default">
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l8">
          <div class="padding-min">

            <div class="carousel carousel-slider center">
              <div class="carousel-item" href="#one!">
                <div class="article">
                  <img style="width:100%" src="/static/image/blog1.jpg"/>
                  <div class="bubble">Kotlin</div>
                  <div class="article-title"><a>Comment faire une toupie avec un élastic ?</a></div>
                  <div class="article-descr">Découvrez comment cet homme a réussi a utiliser son sens de la déduction pour y parvenir...</div>
                </div>
              </div>
              <div class="carousel-item" href="#two!">
                <div class="article">
                  <img style="width:100%" src="/static/image/blog1.jpg"/>
                  <div class="bubble">Kotlin</div>
                  <div class="article-title"><a>Comment faire une toupie avec un élastic ?</a></div>
                  <div class="article-descr">Découvrez comment cet homme a réussi a utiliser son sens de la déduction pour y parvenir...</div>
                </div>
              </div>
              <div class="carousel-item " href="#three!">
                <div class="article">
                  <img style="width:100%" src="/static/image/blog1.jpg"/>
                  <div class="bubble">Kotlin</div>
                  <div class="article-title"><a>Comment faire une toupie avec un élastic ?</a></div>
                  <div class="article-descr">Découvrez comment cet homme a réussi a utiliser son sens de la déduction pour y parvenir...</div>
                </div>
              </div>
              <div class="carousel-item " href="#four!">
                <div class="article">
                  <img style="width:100%" src="/static/image/blog1.jpg"/>
                  <div class="bubble">Kotlin</div>
                  <div class="article-title"><a>Comment faire une toupie avec un élastic ?</a></div>
                  <div class="article-descr">Découvrez comment cet homme a réussi a utiliser son sens de la déduction pour y parvenir...</div>
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
    var instance = M.Carousel.init(elem,{
      fullWidth: true
    })
    setInterval(function () { instance.next() }, 6000)
  },
  data () {
    return {

    }
  }
}

</script>
<style>
.carousel{height:360px;}
.article{position:relative;}
.bubble{position:absolute;top:0px;background:#e91e63;right:20px;padding:10px;color:white;opacity:0.8}
.article-medium{width:300px;height:180px;position:relative;}
.article-title{position:absolute;bottom:89px;font-size:20px;font-weight:bold;color:white;background:black;padding:10px;opacity:0.8;}
.article-descr{position:absolute;bottom:52px;font-size:12px;color:white;background:#222222;padding:10px;opacity:0.8;right:0px;}
@media only screen and (max-width : 992px) {
  .article-title{top:0px;width:100%;font-size:inherit;height:40px;}
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

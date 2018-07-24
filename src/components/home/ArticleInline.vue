<template>
  <div>
    <div class="articleInline margin-top-default">
      <div class="row full-width row-article-inline">
        <div class="col s4 img-inline-art" style="background:url('/static/image/blog2.jpeg')">
        </div>
        <div class="col s8">
          <div class="col s12 padding-min-force">
            <div class="titleArticle"><router-link v-bind:to="'/article/' + article.link"> {{article.title}} </router-link></div>
            <div class="articleDescr">
              {{article.descr}}
            </div>
            <div class="footerInfos">Publié le {{article.date}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bubble-inline">
      <span>
        {{article.theme}}
      </span>
    </div>
  </div>
</template>

<script type = "text/javascript" >

export default {
  name: 'ArticleInline',
  props: ['article']
}

</script>
<style>
  .img-inline-art{width:25%;height:100%;overflow:hidden;border-right:1px solid #dedede;}
  .img-inline-art:hover{cursor:pointer;}
  .inline-art-content{height:100%;width:75%;padding-left:15px;}
  .bubble-inline{font-weight:bold;z-index:2;bottom:0px;left:0px;color:white;opacity:0.8;position:relative; margin-top:-20px;margin-left:5px;font-size:13px;text-transform: capitalize;}
  .bubble-inline span{background:#e91e63;padding:3px;padding-left:10px;padding-right:10px;text-align:center;}
  .bubble-inline span:hover{padding:5px;padding-left:12px;padding-right:12px;text-align:center;cursor:pointer;}
.articleInline{
  z-index:1;
  position:relative;
  background: #fff;
  min-height: 60px;
  max-height: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid #dedede;
  border-bottom-width: 2px;
  overflow: hidden;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 400px;
  flex: 1 1 400px;
  width: 100%;
}
.row-article-inline{margin:0;}
.articleDescr{text-transform:capitalize;font-size:12px;margin-top:5px;padding-bottom:25px;overflow: hidden;max-height:58px;}
@media only screen and (max-width : 470px) {
  .articleInline{ max-height: 120px;}
  .img-inline-art img{width:100%;}
}

.titleArticle{text-transform:capitalize;font-weight:bold;cursor:pointer;max-height:20px;overflow:hidden}
.titleArticle:hover{text-decoration: underline;}
.footerInfos{position:absolute;font-size: 12px;color:#e91e63;margin-top:-2px;text-align:right;right:8px;}
  @media only screen and (max-width : 600px) {
    .titleArticle{padding-left:10px;}
    .articleDescr{padding-left:10px;}
  }
</style>

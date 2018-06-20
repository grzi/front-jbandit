<template>
  <div>
    <div class="articleInline margin-top-default">
      <div class="row full-width">
        <div class="col s12 padding-min-force">
          <span class="titleArticle">{{article.title}}</span>
          <div class="articleDescr">
          {{article.descr}}
        </div>
          <div class="footerInfos">Publié le {{article.date}}</div>
        </div>
      </div>
    </div>

    <div>

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
.articleInline{
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
.articleDescr{font-size:12px;margin-top:5px;}
@media only screen and (max-width : 470px) {
  .articleInline{max-height:inherit;}
}

.titleArticle{font-weight:bold;cursor:pointer;}
.titleArticle:hover{text-decoration: underline;}
.footerInfos{position:absolute;font-size: 12px;color:#e91e63;margin-top:5px;text-align:right;right:20px;}
</style>

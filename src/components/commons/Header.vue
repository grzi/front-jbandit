<template>

  <div class="row black header no-margin-bottom" >
    <div class='section-center'>
      <ul class="right margin-right-min black">
        <li><a class="mybutton">Se connecter</a></li>
        <li><a class="mybutton">Inscription</a></li>
      </ul>
      <div class="clear"></div>
      <div class='white-text'>
        <h3><b>jBandit</b></h3>
        <h5>Une accroche qui envoie du paté</h5>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript" >

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<style>
.no-margin-bottom{margin-bottom:0px;padding-bottom:20px;}
.section-center{max-width: 1200px;min-width:800px;margin:auto;}
.clear{clear:both;}
.header ul li{float:left;}
.vertical-padding{padding-top:10px;}
.black{background-color:black;}
.mybutton:hover{background:white;color:black;}
.mybutton {
  cursor: pointer;
  display: inline-block;
  background: #E0E1E2 none;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: bold;
  line-height: 1em;
  border-radius: 0.28571429rem;
  font-size: 1em;
  -webkit-box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  background: transparent none;
  color: #FFFFFF;
  margin-left:0.75em !important;
}
.margin-right-min{margin-right:15px;}
</style>

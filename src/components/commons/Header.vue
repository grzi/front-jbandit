<template>
  <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <div class="right item">
          <a class="ui inverted button">Connexion</a>
          <a class="ui inverted button">Inscription</a>
        </div>
      </div>
    </div>
    <div class="ui container">
      <h1 class="ui inverted header left aligned ">
        JBandit
      </h1>
      <h3 class="h3left ui inverted header left aligned">
          Mon accroche qui donne envie
      </h3>
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
.ui.button{margin-left:0.75em !important;}
.container-menu{margin-top:20px;}
</style>

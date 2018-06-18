<template>
  <div class="header">
    <div class='autoHeight container'>
      <div class="nav-wrapper padding-left-min padding-bottom-min white blue-grey text-darken-4">
        <h3 class="no-margin">j<b><span class='pink-text'>B</span>andit</b></h3>
        <h6 class=""><b>Blog IT JAVA, Kotlin, JS, Frameworks...</b></h6>
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
.header{border-top:2px solid #e91e63;padding-top:25px;padding-bottom:25px;}
.inversed{background-color: black;border:2px solid white;color:#212121;color:white;font-weight:bold;}
</style>

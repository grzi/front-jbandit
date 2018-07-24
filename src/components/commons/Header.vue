r<template>
  <div class="header blue-grey darken-4">
    <div class='autoHeight container'>
      <div class="nav-wrapper padding-left-min padding-bottom-min blue-grey darken-4 blue-grey text-darken-4">
        <h3 class="no-margin"><router-link to="/"><img src="/static/image/jbandit-white-75.png"/></router-link></h3>
        <h6 class="white-text descr-header">{{data.description}}</h6>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript" >
export default {
  name: 'Header',
  props: ['data']
}
</script>
<style>
.header{border-top:0px solid #e91e63;padding-top:25px;padding-bottom:25px;}
.inversed{background-color: black;border:2px solid white;color:#212121;color:white;font-weight:bold;}
  .descr-header{font-size:14px;}
</style>

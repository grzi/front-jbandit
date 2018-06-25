<template>
  <div>
    <nav class="nav-extended">
      <div class="nav-wrapper blue-grey darken-4">
        <div class="container">
          <ul id="nav-mobile" class="left">
            <li><a>Accueil</a></li>
            <li v-for="menu in menus" v-bind:key="menu.name">
              <a class="menu-item">{{menu.name}}s</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script type = "text/javascript" >

export default {
  name: 'Menu',
  props: ['menus']
}

</script>
<style>
.menu-item{text-transform: capitalize;}
</style>

<template>
  <div id="app">
      <b-row >
        <b-col>
          <Header id="header" class="header"> </Header>
          <Navigation id="navigationBar" class="navigationBar"> </Navigation>
         
        </b-col>
      </b-row>
     
    <b-row>
        <Menu id="menu" class="menu"></Menu>
        <b-col><router-view id="content" class="content"></router-view></b-col>
    </b-row>
    
  </div>
</template>

<script>

import Header from './components/commonHeader.vue';
import Navigation from './components/navigationBar.vue';
import Menu from './components/sideBarMenu.vue';
export default {
  name: "hot-events",
  components: {
   
    Header,
    Navigation,
    Menu,
  },
  
}
</script>

<style scoped>
#app{font-family:Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}

#content{
 text-align: center;
}
#navigationBar{
  text-align: center;
}





</style>

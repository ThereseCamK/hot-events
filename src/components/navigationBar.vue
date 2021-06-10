<template>
  <div id="navigationBar">
    <b-navbar >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav center>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link to="/">Hjem</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/pics">Bildeshow</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/answer">Svar</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/chat">Chatterom </router-link></b-nav-item>
          <b-nav-item href="#"> <router-link to="/contact">Kontakt oss</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
#navigationBar{
 
  box-shadow: 1px 1px 2px whitesmoke, 0 0 25px lightslategray, 0 0 5px lightskyblue;
}
</style>
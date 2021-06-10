<template>
<div>
    <div>
    <b-button v-b-toggle.sideBarButton >Meny</b-button>
    <b-sidebar id="sideBarButton" title="Meny-valg" shadow>
      <div class="px-3 py-2">
          <b-button id="sideBarButton"><router-link to="/foodMenu"> Meny</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to="/guests">Gjester</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to ="/budget">Budskjett</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to ="/notes">Notat</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to ="/toDo">Huskeliste</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to ="/agenda">Agenda</router-link></b-button><br>
          <b-button id="sideBarButton"><router-link to ="/settings">Instillinger</router-link></b-button>
      </div>
    </b-sidebar>
  </div>
    

  </div>
</template>


<style scoped>
#sideBarButton{
    width: 100px;
    padding: 5px;
    margin: 2px;
    color: white;
}


</style>

<template>
    <div id="header">
      <h1> HOT - EVENTS</h1>
       <b-navbar >
        <b-navbar-nav class="ml-auto">
           <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Bruker</em>
          </template>
          <b-dropdown-item href="#">Profil</b-dropdown-item>
          <b-dropdown-item href="#">Logg inn</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

  </b-navbar>
        </div>
</template>
<style scoped>
#header{
  text-align: center;
padding-top: 10px;
color: white;
 background-image: linear-gradient(150deg, rgb(231, 218, 231), rgb(236, 157, 170), rgb(252, 95, 121), rgb(245, 62, 93));
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  box-shadow: 1px 1px 2px whitesmoke, 0 0 25px lightslategray, 0 0 5px lightskyblue;
}
</style>
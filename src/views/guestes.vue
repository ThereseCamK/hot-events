<template>
    <div>
  <b-button v-b-toggle.collapse-1 variant="primary">Vis Personer </b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">SvigerMor og SvigerFar</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Kommer? </b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <p>Ja</p>
      </b-collapse>
      <p class="card-text">Mor og Far</p>
      <b-button v-b-toggle.collapse-2-inner size="sm">Kommer? </b-button>
      <b-collapse id="collapse-2-inner" class="mt-2">
        <p>Nei</p>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>
    
</template>

<script>
export default {
  name: "Guests",
  data(){
    return{
      
    }
  }
}
</script>
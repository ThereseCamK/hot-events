<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" locale="en-US" 
      :start-weekday="weekday"></b-calendar>
    </b-col>
    <b-col>
      <p>Valgt Dato: <b>'{{ value }}'</b></p>
      <p class="mb-0">Innhold denne dagen:</p>
      
      <b-list-group>
         <b-list-group-item variant="light"></b-list-group-item>
         <b-list-group-item variant="dark"></b-list-group-item>
 <b-container >
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`"> <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
      <b-button>lagre</b-button>
  </b-container>
    </b-list-group>
    </b-col>
  </b-row>
</template>


<script>
export default {
    name: "ToDo",
    data(){
        return{
            value: '', 
        types: [
          'text',
          'date',
          'time',
        ],
        weekday: 1
        }
    },
 

    // methods: {
    //   onContext(ctx) {
    //     this.context = ctx
    //   }
    
    

}
</script>
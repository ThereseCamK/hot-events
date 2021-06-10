<template>
    <div> 
       <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <b-carousel-slide
        caption="First slide"
        text="dette var litt kult"
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

    
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
        
          >
        </template>
      </b-carousel-slide>

     
    </b-carousel>

    <p class="mt-4">
      bilde nr: {{ slide +1}}<br>
   
    </p>
    </div>
</template>

<script>
export default {
    name: "Pics",
    data(){
        return{
            slide: 0,
           
            
        }


    }
}
</script>
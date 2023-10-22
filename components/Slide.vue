<template>
        
        <v-carousel height="600px" hide-delimiters :show-arrows="false" progress="primary" cycle :interval="interval"
        >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      transition="slide-fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          
           {
           src: '/images/slidebaner.jpg',
         },
  //         {
  //          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  //        },
  //        {
  //          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  //        },
        ],
  //     interval: 3000
      }
    },
  }
</script>
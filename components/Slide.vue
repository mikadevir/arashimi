<template>
  <div>
    <v-img src="/images/image.jpg" cover>

      <v-container>
        <v-card  max-width="700"   class=" text-center margin-t text-white mx-auto overlay " >
          <v-card-title class="shadow">
            <v-card-title  class="text-h4" >آرا شیمی کیمیا</v-card-title>
            <v-card-title  class="text-h4">ارتقای بهره وری کشاورزان</v-card-title>
            <v-card-title  class="text-h6 text-md-h5 text-lg-h4 ">تامین کننده نهاده های کشاورزی از سال ۱۳۷۹</v-card-title>
          </v-card-title>
        </v-card>
      </v-container>
    </v-img>
  </div>
</template>



<style>

.overlay
{
    background-color: rgba(5, 38, 92, 0.6);
    backdrop-filter: blur(2px);
}

.shadow {
  color: white;
  text-shadow: 5px 0px 2px #000000;
}
.margin-t 
{
  margin-top: 250px;
}
.width-card {
  max-width: "700";
}
@media (min-width: 320px) {
  .margin-t 
{
  margin-top: 30px;
}
}
@media (min-width: 680px) {
  .margin-t 
{
  margin-top: 100px;
}
}
@media (min-width: 960px) {
  .margin-t 
{
  margin-top: 150px;
}
}
</style>
<!-- <template>
        
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
           src: '/images/image.jpg',
         },
        //    {
        //    src: '/images/slidebaner.jpg',
        //  },
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
</script> -->
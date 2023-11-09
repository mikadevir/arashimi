<template>
  <v-app>
    <v-app-bar app>
      
      
      

      <v-toolbar-title class="text-center" > <v-icon>mdi-sprout</v-icon>محصولات</v-toolbar-title>
    
  
      <!--<v-btn @click="showAll(category)"><v-chip color="orange">همه</v-chip></v-btn>
      <v-btn v-for="(category, index) in categories" :key="index" @click="filterProduct(category)">
        {{ category }}
      </v-btn>


      <v-spacer></v-spacer>
-->

    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="/images/catalog.png"
      
      cover
    ></v-img>

    <v-card-title>
      کاتالوگ محصولات
    </v-card-title>

    <v-card-subtitle>
       با اسکن کردن بارکد بالا می توانید کاتالوگ <br>محصولات را مشاهده نمایید و یا از لینک زیر<br> دریافت نمایید.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        لینک دانلود
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <a href="https://arashimikimia.com/download/cataloug.pdf" target="_blank"> کاتالوگ</a>        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
          </v-col>
          <!--<v-col v-for="item in filteredProducts" :key="item.id"  cols="6" sm="4" md="3">
            <v-card class="mx-auto" max-width="344">
              <v-img :src="item.image" height="200px" cover></v-img>

              <v-card-title>
                {{ item.name }}
              </v-card-title>

              <v-card-subtitle>
                {{ item.category }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                  more info
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ item.info }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>-->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>

export default {

  data: () => ({
      show: false,
    }),



  //data: () => ({
   // show: false,
   // selectedProduct: null,
   // categories: ["insecticide", "herbicide", "fungicide"],

   // products: [
   //   { name: 'p1', id: 1, image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'insecticide', info: '1' },
    //  { name: 'p2', id: 2, image: 'https://picsum.photos/g/200?image=122', category: 'fungicide', info: '2' },
    //  { name: 'p3', id: 3, image: 'https://picsum.photos/g/200?image=116', category: 'herbicide', info: '3' },
    //  { name: 'p4', id: 4, image: 'https://picsum.photos/g/200?image=121', category: 'insecticide', info: '4' },
    //  { name: 'p5', id: 5, image: 'https://picsum.photos/g/200?image=115', category: 'insecticide', info: '5' },
    //  { name: 'p6', id: 6, image: 'https://picsum.photos/g/200?image=117', category: 'fungicide', info: '6' },
    //  { name: 'p7', id: 7, image: 'https://picsum.photos/g/200?image=118', category: 'herbicide', info: '7' },
   //   { name: 'p8', id: 8, image: 'https://picsum.photos/g/200?image=120', category: 'insecticide', info: '8' },
   //   { name: 'p9', id: 9, image: 'https://picsum.photos/g/200?image=119', category: 'fungicide', info: '9' },
   //   { name: 'p10', id: 10, image: 'https://picsum.photos/g/200?image=124', category: 'herbicide', info: '10' },
   // ]
  //}),


 // methods: {
 //   filterProduct(category) {
  //    this.selectedProduct = category;
  //  },
  //  showAll() {
  //    this.selectedProduct = null;
  //  }
 // },

//  computed: {
 //   filteredProducts() {
  //    const data = this.selectedProduct
  //      ? this.products.filter((item) => item.category === this.selectedProduct)
 ///       : this.products;
 //     return data;
 //   },
 // },


}
</script>
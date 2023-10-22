<template>
  <v-app >
    <v-locale-provider rtl>
  <div>
    
  <Navbar />
      
   
   <v-main>
    <slot />
   </v-main>


   <Footer />
  </div>
  </v-locale-provider>
</v-app>

</template>



<template>
    <v-toolbar color="white"   density="compact">
      <v-spacer />
        
        <v-col  class="d-flex flex-row text-center">
        <v-toolbar-title><v-btn variant="plain" rounded :to="{ name:'index'}">درباره ما </v-btn></v-toolbar-title>
        <v-toolbar-title> <v-btn variant="plain" rounded :to="{ name: 'products'}">محصولات </v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn variant="plain" rounded :to="{ name: 'contactus'}">ارتباط با ما</v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn   :to="{ name:'index' }">
            <v-img src="/logo/arashlogo.jpg" width="115" height="57" />
          </v-btn></v-toolbar-title>
        </v-col>

       
        <v-spacer />
        
        
    </v-toolbar>
  </template>
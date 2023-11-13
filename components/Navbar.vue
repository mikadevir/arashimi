


<template>
    <v-toolbar color="white"   density="compact">
      <v-spacer />
        
        <v-col  class="d-flex flex-row text-center">
        <v-toolbar-title><v-btn variant="plain" rounded :to="{ name:'index'}">درباره ما </v-btn></v-toolbar-title>
        <v-toolbar-title> <v-btn variant="plain" rounded :to="{ name: 'products'}">محصولات </v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn variant="plain" rounded :to="{ name: 'contactus'}">ارتباط با ما</v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn variant="plain"  :to="{ name:'index' }">
            <v-img src="/logo/logoarash.png" width="115" height="50" />
          </v-btn></v-toolbar-title>
        </v-col>

       
        <v-spacer />
        
        
    </v-toolbar>
  </template>
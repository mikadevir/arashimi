<template>
    <v-footer class="bg-grey-lighten-4">
        <v-row justify="center">
            <v-col class="text-center  d-flex flex-row justify-space-between" cols="8" md="6" >
                <v-list v-for="item in links" :key="item" class="bg-grey-lighten-4">
                    <v-btn :to="{ name: item.route }"  variant="plain"> {{ item.name }}</v-btn>
                </v-list>
            </v-col>
            <v-col class="text-center mt-4" cols="4" md="6">
                {{ new Date().getFullYear() }} — <strong>آرا شیمی</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        links: [
            { name: 'درباره ما', route: 'index' },
            { name: ' محصولات', route: 'products' },
            { name: 'تماس با ما ', route: 'contactus' },
        ],
    }),
}

</script>
<template>
    <v-app-bar :elevation="0" class="py-2">
        <template v-slot:prepend>
            <v-row class="align-center">
                <v-col cols="auto">
                    <v-icon icon="$vuetify" class="mx-4"></v-icon>
                    <v-btn variant="plain" class="mx-2" to="/">
                        Home
                    </v-btn>
                </v-col>
            </v-row>
        </template>

        <v-app-bar-title>
            <v-text-field label="try searching 'chroma rick and morty bag'" v-model="query" prepend-icon="mdi-magnify"
                variant="underlined" class="mt-3"></v-text-field>
        </v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-image-search" @click="fetchProducts"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            query: 'chroma rick and morty bag',
            products: [], // Data fetched from the backend
        };
    },
    methods: {
        async fetchProducts() {
            try {
                // Replace with your backend URL
                const response = await axios.post('', {
                    query: this.query,
                    pages: 9
                });

                console.log('Fetched products:', response.data);
                this.products = response.data; // Assign fetched data to the component's state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },
    created() {

    },
};
</script>
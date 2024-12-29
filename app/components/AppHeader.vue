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
            <v-text-field label="try searching 'marvel t-shirt'" v-model="query" prepend-icon="mdi-magnify"
                variant="underlined" class="mt-3" @keyup.enter="navigateToSearch"></v-text-field>
        </v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-image-search" @click="navigateToSearch"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>

<script>
import { ref } from 'vue';
import { useSearchStore } from '@/stores/searchStore';

export default {
    data() {
        return {
            query: 'marvel t-shirt',
            products: [], // Data fetched from the backend
        };
    },
    methods: {
        async navigateToSearch() {
            try {
                // save the query to the search store
                const searchStore = useSearchStore();
                searchStore.setQuery(this.query);

                // print out the new query
                console.log('[HEADER]New query:', this.query);


                // navigate to the search page
                this.$router.push({
                    name: 'search',
                    query: {
                        q: this.query
                    }
                });

            } catch (error) {
                console.error('Error cannot fetch products:', error);
            }
        },
    },
    created() {

    },
};
</script>
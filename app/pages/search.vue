<template>
    <v-container fluid>
        <!-- Loading State -->
        <v-row v-if="status === 'pending'">
            <v-col v-for="n in 12" :key="n" cols="3">
                <v-skeleton-loader class="mx-auto" max-width="300" type="card-avatar, actions"></v-skeleton-loader>
            </v-col>

        </v-row>

        <!-- Success State -->
        <v-row v-if="status === 'success' && data?.length && data.length > 0">
            <v-col v-for="product in data" :key="product.productId" cols="6">
                <ProductCard :product="product" />
            </v-col>
        </v-row>

        <v-row v-else-if="status === 'success' && data">
            <v-col>
                <v-alert type="warning" title="No results found!" variant="tonal" border="start">
                    We couldn't find any products matching your search.
                </v-alert>
            </v-col>
        </v-row>

        <!-- Error State -->
        <v-row v-else="error">
            <v-col>
                <v-alert type="error" title="Uh oh! Something went wrong..." variant="tonal" border="start">
                    We aren't able to load your products at this time!
                </v-alert>
            </v-col>
        </v-row>


    </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useSearchStore } from '@/stores/searchStore';
import type { Product } from '~/types/Product';

// get the query from the search store
const searchStore = useSearchStore();
const searchQuery = ref(searchStore.query)

console.log("[SEARCH-COMPONENT] searchQuery", searchQuery.value);

// function to fetch data
const fetchProducts = async (query: string): Promise<Product[]> => {
    return await $fetch('http://localhost:7071/api/text-search-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: { query },
    });
};

// fetch the relevant products from the backend
const { data, error, status, refresh } = useAsyncData<Product[]>(
    'product_id',
    () => fetchProducts(searchQuery.value)
)

// subscribe to changes in the search query
searchStore.$subscribe((mutation, state) => {
    searchQuery.value = state.query
})

// watch for changes in the query from the store
watch(searchQuery, async (newQuery, oldQuery) => {
    if (newQuery !== oldQuery) {

        console.log("newQuery", newQuery);
        console.log("oldQuery", oldQuery);
        await refresh();
    }
});

</script>

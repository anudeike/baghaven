<template>
    <div>
        <h1>Search Results</h1>
        <p>Query: {{ route.query.q }}</p>
        <p>{{ data }}</p>
        <p>Status: {{ status }}</p>
        <p v-if="error">An error occurred: {{ error.message }}</p>
        <v-btn @click="refresh">Refresh</v-btn>
        <v-btn @click="clear">Clear</v-btn>

        <!-- <p>{{ productResults }}</p>

        <v-row v-if="productResults">
            <v-col v-for="product in productResults" :key="product" cols="6">
                <ProductCard :product="product" />
            </v-col>
        </v-row> -->

    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data, status, error, refresh, clear } = await useAsyncData(
    'products',
    () => $fetch('http://127.0.0.1:8000/api/productSearch', {
        method: 'POST',
        body: {
            query: route.query.q || '',
            pages: 9
        }
    })
)

</script>
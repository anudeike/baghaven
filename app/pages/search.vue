<template>
    <v-container fluid>
        <v-row v-if="status === 'pending'">
            <v-col v-for="n in 12" :key="n" cols="3">
                <v-skeleton-loader class="mx-auto" max-width="300" type="card-avatar, actions"></v-skeleton-loader>
            </v-col>

        </v-row>
    </v-container>
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

<script setup>

const route = useRoute()

// get the query from the route
const searchQuery = computed(() => route.query.q || '')

// fetch the relevant products from the backend
const { data, error, status, refresh } = useAsyncData(
    'product_id',
    () => $fetch('http://localhost:7071/api/text-search-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            query: searchQuery.value
        }
    })
)

</script>

<script>
export default {
    data: () => ({
        errorSnackbar: false,
        errorSnackbarText: 'Seems like something went wrong...',
    })
};
</script>
<template>
    <v-container fluid>
        <!-- Loading State -->
        <v-row v-if="status === 'pending'">
            <v-col v-for="n in 12" :key="n" cols="3">
                <v-skeleton-loader class="mx-auto" max-width="300" type="card-avatar, actions"></v-skeleton-loader>
            </v-col>

        </v-row>

        <!-- Success State -->
        <v-row v-if="status === 'success' && data">
            <v-col v-for="product in data" :key="product.productId" cols="6">
                <ProductCard :product="product" />
            </v-col>
        </v-row>

        <v-row v-else-if="status === 'success' && !data">
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
    <div>
        <h1>Search Results</h1>
        <p>Query: {{ route.query.q }}</p>
        <p>{{ data }}</p>
        <p>Status: {{ status }}</p>
        <p>Error: {{ error }}</p>

        <!-- <v-btn @click="refresh">Refresh</v-btn> -->

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
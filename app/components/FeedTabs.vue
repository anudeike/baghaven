<template>
    <v-tabs v-model="tab" bg-color="transparent">
        <v-tab value="one">All</v-tab>
        <v-tab value="two">Newest Deals</v-tab>
        <v-tab value="three">Feed</v-tab>
    </v-tabs>

    <v-card-text>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
                <v-row justify="center">
                    <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4" lg="3">
                        <ProductCard :product="product" />
                    </v-col>
                </v-row>
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
                <CreateFirstPostCTA />
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
                <CreateFirstPostCTA />
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card-text>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
    data: () => ({
        tab: null,
        products: Array.from({ length: 50 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 100).toFixed(2), // Random price between 0 and 100
            timeCreated: new Date().toISOString(),
            imageLink: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 1000)}`, // Random image number
            description: `Description for Product ${index + 1}`,
        }))
    }),
}
</script>

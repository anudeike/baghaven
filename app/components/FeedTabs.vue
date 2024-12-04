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
                    <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4" lg="3"
                        class="masonry-item">
                        <v-card>
                            <v-img :src="product.imageLink" aspect-ratio="1.5"></v-img>
                            <v-card-title>{{ product.name }}</v-card-title>
                            <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                            <v-card-text>{{ product.description }}</v-card-text>
                        </v-card>
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

<style>
.masonry-item {
    /* Add some spacing for the masonry effect */
    margin-bottom: 16px;
}

@media screen and (min-width: 600px) {
    .v-col.masonry-item {
        break-inside: avoid;
        /* Ensure items don't break across columns */
    }
}
</style>
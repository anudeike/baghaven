<template>
    <v-tabs v-model="tab" bg-color="transparent">
        <v-tab value="one">All</v-tab>
        <v-tab value="two">Newest Deals</v-tab>
        <v-tab value="three">Feed</v-tab>
    </v-tabs>

    <v-card-text>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
                <!-- TODO: vertical and horizontal center, add more styling -->
                <v-row v-if="firebaseProducts.length === 0">
                    <v-col justify="center">
                        <v-card>
                            <v-card-title>
                                No products found!
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col v-for="(fproduct, id) in firebaseProducts" :key="id" cols="12" sm="6" lg="3">
                        <ProductCard :product="fproduct" />
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
import { ref, onMounted } from 'vue';
import { fetchTopProducts } from '../firebase/firebaseUtilityFunctions.js';

export default {
    data: () => ({
        tab: null,
        sellers: ["BoxLunch", "LoungeFly", "Amazon", "Ebay", "Mercari", "Poshmark", "Shopify"],
        brands: ["BoxLunch", "LoungeFly", "DanMartins"],
        products: Array.from({ length: 50 }, (_, index) => ({
            id: index + 1,
            productId: `prod-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`,
            name: `Product ${index + 1}`,
            price: (Math.random() * 100).toFixed(2), // Random price between 0 and 100
            timeCreated: new Date().toISOString(),
            imageLink: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 1000)}`, // Random image number
            description: `Description for Product ${index + 1}`,
            isOriginal: Math.random() < 0.5,
            sellers: ["BoxLunch", "LoungeFly", "Amazon", "Ebay", "Mercari", "Poshmark", "Shopify"],
            brand: ["BoxLunch", "LoungeFly", "DanMartins"],
        }))
    }),
    setup() {
        const firebaseProducts = ref([]);

        const loadFirebaseProducts = async () => {
            firebaseProducts.value = await fetchTopProducts();
        };

        console.log("firebaseProducts", firebaseProducts);

        onMounted(() => {
            loadFirebaseProducts();
        });

        return { firebaseProducts };
    }
}
</script>

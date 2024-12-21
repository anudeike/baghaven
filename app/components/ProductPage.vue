<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-img :src="product?.baseImage" cover>

                    </v-img>
                </v-card>
            </v-col>

            <v-col cols="6">
                <v-card flat color="transparent">

                    <v-card-title class="text-h4">
                        {{ product?.name }}
                    </v-card-title>

                    <v-card-subtitle>
                        <div class="text-h6 font-weight-light mb-n1">
                            Sellers
                        </div>
                        <v-chip-group column>
                            <v-chip v-for="seller in product?.sellers" :key="seller" prepend-icon="mdi-tag"
                                color="white">
                                {{ seller }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-subtitle>

                    <v-card-actions>
                        <div class="text-h6 font-weight-light mb-n1">
                            <!-- Show the average price of the product listings -->
                            Average Price: ${{ averagePrice }}
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="mx-auto">
                    <v-layout>
                        <v-app-bar flat>

                            <v-toolbar-title class="text-h5">
                                Listings
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn prepend-icon="mdi-filter">Filter</v-btn>
                            <v-btn prepend-icon="mdi-sort">Sort</v-btn>
                        </v-app-bar>

                        <v-main>
                            <v-container>
                                <v-row justify="center">
                                    <v-col v-for="listing in productsListing" :key="listing.id" cols="12">
                                        <v-card flat>
                                            <div class="d-flex flex-no-wrap">
                                                <v-avatar class="ma-3" rounded="0" size="125">
                                                    <v-img :src="product?.imageLink"></v-img>
                                                </v-avatar>

                                                <div>
                                                    <v-card-title class="text-h5">
                                                        {{ listing.name }}
                                                    </v-card-title>

                                                    <v-card-subtitle>{{ listing.description }}</v-card-subtitle>

                                                    <v-card-actions>
                                                        <v-chip-group column>
                                                            <v-chip>
                                                                ${{ listing.price }}
                                                            </v-chip>
                                                            <v-chip color="primary">
                                                                {{ listing.brand }}
                                                            </v-chip>
                                                            <v-chip color="secondary">
                                                                {{ listing.seller }}
                                                            </v-chip>
                                                        </v-chip-group>
                                                    </v-card-actions>
                                                </div>


                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-main>
                    </v-layout>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { Product } from '../types/Product';
import { useProductStore } from '~/stores/productStore';

export default {
    data: () => ({
        tab: null,
        sellers: ["BoxLunch", "LoungeFly", "Amazon", "Ebay", "Mercari", "Poshmark", "Shopify"],
        brands: ["BoxLunch", "LoungeFly", "DanMartins"],
        productsListing: Array.from({ length: 20 }, (_, index) => ({
            id: index + 1,
            productId: `prod-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`,
            name: `Listing ${index + 1}`,
            price: (Math.random() * 100).toFixed(2), // Random price between 0 and 100
            timeCreated: new Date().toISOString(),
            imageLink: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 1000)}`, // Random image number
            description: `External Link: Description for Product Listing ${index + 1}`,
            isOriginal: Math.random() < 0.5,
            seller: ["BoxLunch", "LoungeFly", "Amazon", "Ebay", "Mercari", "Poshmark", "Shopify"][Math.floor(Math.random() * 7)],
            brand: ["BoxLunch", "LoungeFly", "DanMartins"][Math.floor(Math.random() * 3)],
        }))
    }),
    computed: {
        product(): Product | null {
            const productStore = useProductStore();
            return productStore.selectedProduct;
        },
        averagePrice() {
            const total = this.productsListing.reduce((sum, product) => sum + parseFloat(product.price), 0);
            return (total / this.productsListing.length).toFixed(2); // Return average rounded to 2 decimals
        },
    }
}
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-img :src="product?.imageLink" cover>

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
                                {{ seller }}</v-chip>
                        </v-chip-group>
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn>Buy</v-btn>
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
                                <v-row dense>
                                    <v-col cols="12">
                                        <v-card color="#1F7087">
                                            <div class="d-flex flex-no-wrap justify-space-between">
                                                <div>
                                                    <v-card-title class="text-h5">
                                                        Supermodel
                                                    </v-card-title>

                                                    <v-card-subtitle>Foster the People</v-card-subtitle>

                                                    <v-card-actions>
                                                        <v-btn class="ms-2" size="small" text="START RADIO"
                                                            variant="outlined"></v-btn>
                                                    </v-card-actions>
                                                </div>

                                                <v-avatar class="ma-3" rounded="0" size="125">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                                                </v-avatar>
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
    computed: {
        product(): Product | null {
            const productStore = useProductStore();
            return productStore.selectedProduct;
        }
    }
}
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Product</v-card-title>

                    <v-card-subtitle>{{ product?.description }}</v-card-subtitle>
                </v-card>
            </v-col>

            <v-col>
                <v-card>
                    <v-card-title>Product</v-card-title>
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
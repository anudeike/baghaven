<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="50" close-delay="200">
        <v-card variant="flat" color="transparent" v-bind="props" elevation="0" @click="openProduct">
            <v-img :src="product.imageLink" aspect-ratio="1.5" :class="{ 'on-hover': isHovering }" cover>
                <v-overlay :model-value="!!isHovering" scrim="#001714" contained opacity="0.5" class="align-sr">
                    <v-row class="ma-2">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <v-card-title>
                                        <div>
                                            {{ product.name }}
                                        </div>

                                        <v-chip-group>
                                            <v-chip v-if="product.isOriginal" prepend-icon="mdi-check-circle"
                                                color="white">
                                                original
                                            </v-chip>

                                            <v-chip prepend-icon="mdi-currency-usd" color="white">
                                                {{ product.price }} USD
                                            </v-chip>
                                        </v-chip-group>
                                    </v-card-title>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-overlay>
            </v-img>

            <div class="text-h6 ma-2">
                {{ product.name }}
            </div>

            <div class="text-p ma-2">
                {{ product.description }}
            </div>
        </v-card>
    </v-hover>
</template>

<script lang="ts">

import { useProductStore } from '../stores/productStore';
import type { Product } from '../types/Product';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
    methods: {
        openProduct() {
            // store the product in the state
            const productStore = useProductStore();
            productStore.setProduct(this.product);
            this.$router.push(`/product/${this.product.productId}`);
        },
    },
});
</script>

<style scoped>
.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}

.card-outter {
    padding-bottom: 50px;
}

.card-actions {
    position: absolute;
    bottom: 0;
}
</style>
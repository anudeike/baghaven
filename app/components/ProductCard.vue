<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200" close-delay="200">
        <v-card variant="flat" color="transparent" v-bind="props" elevation="0">
            <v-img :src="product.imageLink" aspect-ratio="1.5" :class="{ 'on-hover': isHovering }" cover>
            </v-img>

            <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                <v-card-title color="white">{{ product.name }}</v-card-title>
            </v-overlay>

            <!-- <v-card-subtitle>${{ product.price }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text> -->
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>
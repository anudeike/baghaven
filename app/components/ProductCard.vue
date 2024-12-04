<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200" close-delay="200">
        <v-card variant="flat" color="transparent" v-bind="props">
            <v-img :src="product.imageLink" aspect-ratio="1.5" cover>
                <!-- transition here -->
                <v-expand-transition>
                    <div v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                        style="height: 100%;">
                        $14.99
                    </div>
                </v-expand-transition>
            </v-img>

            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>${{ product.price }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text>
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
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>
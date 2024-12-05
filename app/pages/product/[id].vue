<template>
    <ProductPage :product="product" />
</template>

<script>
import ProductPage from '~/components/ProductPage.vue';
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    }
};

</script>

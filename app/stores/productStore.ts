import { defineStore } from 'pinia'
import type { Product } from '../types/Product'

export const useProductStore = defineStore('product', {
    state: () => ({
        selectedProduct: null as Product | null,
    }),
    actions:{
        setProduct(product: Product) {
            this.selectedProduct = product
        }
    }
});
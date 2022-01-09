<template>
    <div>
        <div class="product_container">
            <h1>Products Pages</h1>
            <div v-for="product in products" :key="product.id">
                <div class="product--images">
                </div>
                <div class="product--info">
                    {{ product.name }}</br>
                    {{ product.sku }}</br>
                    {{ product.regular_price }}</br>
                    {{ product.sale_price }}</br>
                    {{ product.description }}</br>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        fetchWooComProducts,
    } from "@/plugins/woocomapi.js";

    export default {
        data() {
            return {
                products: []
            }
        },
        methods: {
            async getProducts() {
                await fetchWooComProducts().then((response) => {
                    this.products = response.data
                }).catch((e) => {
                    throw new Error('get products, please try again')
                })
            },
        },
        mounted() {
            this.getProducts()
        }
    }
</script>

<style>

</style>
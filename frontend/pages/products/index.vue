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
        WooCommerceProducts
    } from "@/plugins/classWooCommerceProducts.js";

    export default {
        data() {
            return {
                products: []
            }
        },
        methods: {
            getProducts() {
                const WooComProducts = new WooCommerceProducts()
                WooComProducts.getProducts().then((response) => {
                    this.products = response[0]
                    console.log(response[1])
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getProducts()
        }
    }
</script>

<style>

</style>
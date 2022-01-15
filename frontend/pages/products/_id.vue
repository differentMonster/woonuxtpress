<template>
    <div>
        <div class="product_container">
            <h1>Product Pages</h1>
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
            getProduct() {
                const WooComProducts = new WooCommerceProducts()
                WooComProducts.getProduct(this.$route.params.id).then((response) => {
                    this.products = response
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getProduct()
        }
    }
</script>

<style>

</style>
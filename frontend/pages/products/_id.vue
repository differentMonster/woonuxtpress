<template>
    <div>
        <div class="product_container">
            <h1>Product Pages</h1>
            <div>
                <div class="product--images" v-for="image in product.images">
                    <img alt="" :src="`${image.src}`" />
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
                product: {}
            }
        },
        methods: {
            getProduct() {
                const WooComProducts = new WooCommerceProducts()
                WooComProducts.getProduct(this.$route.params.id).then((response) => {
                    this.product = response[0]
                    console.log(response[1])
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
    .product_container {
        width: 100%;
        text-align: center;
        position: relative;
        margin-top: 100px;
    }

    .product--images img {
        width: 500px;
        height: 670px;
    }
</style>
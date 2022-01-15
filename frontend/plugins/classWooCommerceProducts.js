import {
    WooComRestApi
} from "~/plugins/classWooCommerceOrigin.js";

export class WooCommerceProducts {
    constructor() {

    }

    async getProducts() {
        try {
            const response = await WooComRestApi.get("products")
            const responseConsole = 'WooCommerceProducts get products = successful';
            return [response.data, responseConsole]
        } catch {
            throw new Error('WooCommerceProducts get products =' + ' ' + error)
        }
    }

    async getProduct(id) {
        try {
            const response = await WooComRestApi.get("products/" + id)
            const responseConsole = 'WooCommerceProducts get product = successful';
            return [response.data, responseConsole]
        } catch {
            throw new Error('WooCommerceProducts get product' + id + '=' + ' ' + error)
        }
    }
}
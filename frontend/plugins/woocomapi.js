import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
    url: "http://localhost:3080",
    consumerKey: process.env.WOO_KEY,
    consumerSecret: process.env.WOO_SECRET,
    version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooComProducts() {
    try {
        const response = await api.get("products");
        return response

    } catch (error) {
        throw new Error(error);
    }
}

export async function createWooComCustomer(customer_email, customer_username, customer_password) {


    try {
        const response = await api.post("customers", {
            data: {
                email: customer_email,
                username: customer_username,
                password: customer_password
            }
        })

        return response

    } catch (error) {
        throw new Error(error);
    }
}
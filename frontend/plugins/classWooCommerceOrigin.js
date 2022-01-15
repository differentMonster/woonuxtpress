import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
// const api = new WooCommerceRestApi({
//     url: "http://localhost:3080",
//     consumerKey: process.env.WOO_KEY,
//     consumerSecret: process.env.WOO_SECRET,
//     version: "wc/v3",
// });

// nitialise localhost test
export const WooComRestApi = new WooCommerceRestApi({
    url: "http://localhost:3080",
    consumerKey: "ck_bd64ad5726c7be4ad27b4131742ce94e04d01017",
    consumerSecret: "cs_25b6d9389965f8b72735d92fc67bbc81fa274313",
    version: "wc/v3",
});
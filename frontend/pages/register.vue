<template>
    <form class="ps-form--auth" id="register__tab" @submit.prevent="registerUsers">
        <div class="ps-tabs">
            <!-- start Account Content - Register -->
            <div class="ps-tab" id="tab-2">
                <div class="form-group">
                    <input class="form-control" v-model="username" type="text" placeholder="Username">
                </div>
                <div class="form-group">
                    <input class="form-control" v-model="email" type="text" placeholder="Email">
                </div>
                <div class="form-group">
                    <input class="form-control" v-model="password" type="text" placeholder="Password">
                </div>
                <div class="ps-form__desc">
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                </div>
                <div class="form-group submit">
                    <button class="ps-btn ps-btn--fullwidth ps-btn--black">Register</button>
                </div>
            </div>
            <!-- end Account Content - Register -->
        </div>
    </form>
</template>

<script>
    import {
        createWooComCustomer
    } from '@/plugins/woocomapi.js'
    export default {
        data() {
            return {
                email: '',
                username: '',
                password: ''
            }
        },
        methods: {
            async registerUsers() {
                await createWooComCustomer(this.email, this.username, this.password).then((response) => {
                    console.log(respons)
                }).catch((e) => {
                    throw new Error('failure create customer')
                })
            },
        },
        mounted() {}
    }
</script>
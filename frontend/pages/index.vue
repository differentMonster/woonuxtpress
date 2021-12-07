<template>
    <div class="container">
        <div>
            <post-item v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
    import PostItem from "@/components/PostItem";

    export default {
        components: {
            PostItem,
        },
        data() {
            return {
                posts: [],
            }
        },
        computed: {
            // posts() {
            //     return {
            //         title: 'test page',
            //         slug: 'test post',
            //         content: '<p>this is a test post</p>',
            //         excerpt: '<p>this is a test post 2</p>'
            //     }
            // }
        },
        async fetch() {
            // const posts = await this.$axios.$get("http://localhost:3080/wp-json/wp/v2/posts");
            const postx = await this.$wp.frontPage()
            console.log(this.$wp)
            this.posts = postx
        },
    };
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family:
            'Quicksand',
            'Source Sans Pro',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
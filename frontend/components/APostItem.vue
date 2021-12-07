<template>
    <div>
        <title>Posts</title>
        <h1>{{ posts }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        async fetch() {
            // const posts = await this.$axios.$get("http://localhost:3080/wp-json/wp/v2/posts");
            const postx = await this.$wp.posts()
            console.log(postx[1])
            this.posts = postx
        },
    }
</script>
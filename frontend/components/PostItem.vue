<template>
    <div class="post-item">
        <h3>#{{ post.id }}: {{ post.title.rendered }}</h3>
        <div class="the-excerpt" v-html="post.content.rendered"></div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                default: () => {}
            }
        }
    };
</script>
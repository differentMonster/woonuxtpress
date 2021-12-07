export { default as APostItem } from '../../components/APostItem.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as PostItem } from '../../components/PostItem.vue'

export const LazyAPostItem = import('../../components/APostItem.vue' /* webpackChunkName: "components/apost-item" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyPostItem = import('../../components/PostItem.vue' /* webpackChunkName: "components/post-item" */).then(c => c.default || c)

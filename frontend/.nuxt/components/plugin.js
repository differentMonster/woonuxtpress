import Vue from 'vue'

const components = {
  APostItem: () => import('../../components/APostItem.vue' /* webpackChunkName: "components/apost-item" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  PostItem: () => import('../../components/PostItem.vue' /* webpackChunkName: "components/post-item" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

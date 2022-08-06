
<template>
  <div class="app-vue main-layout">
    <main-header />
    <main class="app-container">
      <RouterView />
    </main>
  </div>
</template>
 <script>
 import { RouterLink, RouterView } from 'vue-router'
 import mainHeader from './components/main-header.vue';
 import { fireBaseService } from './services/firebase.js'
 import { store } from './store/store';
 export default {
   name: 'app-vue',
   components: {
     mainHeader
   },
   data() {
     return {};
   },
   async created() {
     try {
       this.$store.dispatch({ type: 'loadTasks' })
     } catch (error) {
 
     }
   },
   methods: {},
   computed: {},
   unmounted() { },
 };
 </script>


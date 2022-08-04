
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
       const tasks = await fireBaseService.query('task')
       const task = await fireBaseService.getEntityById('task','v9KvicIUKyLJuSt5iSwN')
       const empty = fireBaseService.getEmptyEntity()

       console.log(empty);
     } catch (error) {
 
     }
   },
   methods: {},
   computed: {},
   unmounted() { },
 };
 </script>


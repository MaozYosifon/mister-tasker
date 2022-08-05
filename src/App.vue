
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
       //  const tasks = await fireBaseService.query('task')
       //  console.log(tasks)
       //  let task = await fireBaseService.getEntityById('task','v9KvicIUKyLJuSt5iSwN')
 
       //  const task = {
       //    title: "secTest",
       //    description: "description",
       //    importance: 3,
       //    status: "Active",
       //    createdAt: {
       //      seconds: 1659621452,
       //      nanoseconds: 195000000
       //    },
       //    doneAt: {
       //      seconds: 1659718670,
       //      nanoseconds: 438000000
       //    }
       //  }
 
     } catch (error) {
 
     }
   },
   methods: {},
   computed: {},
   unmounted() { },
 };
 </script>


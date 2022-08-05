<template>
    <div class="main-app">
        <task-list :tasks="tasks" />
    </div>
</template>
 <script>
import taskList from '../components/task-list.vue';
export default {
    name: 'tasker-app',
    components: {
        taskList
    },
    data() {
        return {};
    },
    created() {

    },
    methods: {},
    computed: {
        tasks() {
            return this.$store.getters.getTasks
        },
    },
    unmounted() { },
};
</script>
 <style>
 </style>
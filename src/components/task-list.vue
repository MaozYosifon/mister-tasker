<template>
    <table class="tasks-table">
        <thead>
            <th>Title</th>
            <!-- <th>Description</th> -->
            <th>Importance</th>
            <th>Status</th>
            <th>CreatedAt</th>
            <th>DoneAt</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <task-preview v-for="task in tasks" :task="task" />
        </tbody>
    </table>

</template>
 <script>
import taskPreview from './task-preview.vue';
export default {
    props: {
        tasks: Array
    },
    name: 'task-list',
    components: {
        taskPreview
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
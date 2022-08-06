<template>
    <table class="tasks-table">
        <thead>
            <th>Title</th>
            <!-- <th>Description</th> -->
            <th>Importance</th>
            <th>Status</th>
            <!-- <th>CreatedAt</th>
            <th>DoneAt</th> -->
            <th>Actions</th>
        </thead>
        <tbody>
            <task-preview v-for="task in tasks" :task="task" @onDetails="openModal" />
        </tbody>
        <div v-if="isModalOpen" class="modal">
            <task-modal v-if="modalContent" :content="modalContent" />
        </div>
    </table>

</template>
 <script>
import taskPreview from './task-preview.vue';
import taskModal from './task-modal.vue'
export default {
    props: {
        tasks: Array
    },
    name: 'task-list',
    components: {
        taskPreview,
        taskModal
    },
    data() {
        return {
            isModalOpen: false,
            modalContent: null
        };
    },
    created() { },
    methods: {
        openModal(currTask) {
            console.log('currTask', currTask);
            this.isModalOpen = true
            this.modalContent = currTask
        },
        closeModal() {
            this.isModalOpen = false
            this.modalContent = null
        },

    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
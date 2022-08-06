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
            <task-preview v-for="task in tasks" :task="task" @openModal="openTaskModal" />
        </tbody>
        <div v-if="isModalOpen" class="modal">
            <task-modal v-if="modalContent" :currTask="modalContent" @closeModal="closeModal" @saveTask="saveTask" />
        </div>
    </table>
    <button v-if="!isModalOpen" @click="addTask">Add</button>
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
        openTaskModal(currTask, isEdit) {
            this.isModalOpen = true
            this.modalContent = JSON.parse(JSON.stringify(currTask))
            this.modalContent.isEdit = isEdit
        },
        closeModal() {
            this.isModalOpen = false
            this.modalContent = null
        },
        saveTask(task) {
            this.$store.dispatch({ type: 'saveTask', task })
        },
        addTask() {
            this.isModalOpen = true
            this.modalContent = this.$store.getters.getEmptyTask
        }

    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
<template>
    <tr>
        <td>{{ task.title }}</td>
        <!-- <td>{{ task.description }}</td> -->
        <td>{{ task.importance }}</td>
        <td>{{ task.status }}</td>
        <!-- <td>{{ task.createdAt.seconds }}</td>
        <td>{{ task.doneAt.seconds }}</td> -->
        <td class="actions-btn">
            <span class="details-btn" @click="onDetails">Details</span>
            <span class="edit-btn" @click="onEdit">Edit</span>
            <span class="delete-btn" @click="onDelete(task._id)">Delete</span>
        </td>
    </tr>
</template>
 <script>
export default {
    props: {
        task: Object
    },
    name: 'task-preview',
    components: {},
    data() {
        return {};
    },
    created() { },
    methods: {
        onDetails() {
            this.$emit('openModal', this.task,false)
        },
        onEdit(taskId) {
            this.$emit('openModal', this.task,true)
        },
        onDelete(taskId) {
            this.$store.dispatch({ type: 'removeTask', id: taskId })
        },
    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
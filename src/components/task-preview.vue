<template>
    <tr>
        <td>{{ task.title }}</td>
        <!-- <td>{{ task.description }}</td> -->
        <td>{{ task.importance }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.createdAt.seconds }}</td>
        <td>{{ task.doneAt.seconds }}</td>
        <td class="actions-btn"><span class="edit-btn">Edit</span><span class="delete-btn">Delete</span></td>
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
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
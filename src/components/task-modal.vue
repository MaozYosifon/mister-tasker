<template v-if="currTask">
    <section v-if="currTask.isEdit" class="inputs-sec">
        <form class="flex column align-center">
            <label for="title">
                <span>Title</span><input type="text" name="title" v-model="currTask.title" required/>
            </label>
            <label for="importance">
                <span>Importance</span><select name="importance" id="" v-model="currTask.importance">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <label for="status">
                <span>Status</span><select name="status" id="" v-model="currTask.status">
                    <option value="done">Done</option>
                    <option value="new">New</option>
                    <option value="active">Active</option>
                    <option value="Active">Active1</option>
                    <option value="pending">Pending</option>
                </select>
            </label>
            <label for="description">
                Description
                <textarea name="description" v-model="currTask.description" required></textarea>
            </label>
            <span @click="saveTask">Save</span>
            <span @click="closeModal">Cancel</span>
        </form>
    </section>
    <section v-else class="preview-section">
        <p>Title:{{ currTask.title }}</p>
        <p>Importance:{{ currTask.importance }}</p>
        <p> Status:{{ currTask.status }}</p>
        <p> Created at:{{ currTask.createdAt }}</p>
        <p> <span v-if="currTask.doneAt">
                Done at:{{ currTask.doneAt }}
            </span></p>
        <p> Description:{{ currTask.description }}</p>
        <button @click="closeModal">Back</button>
    </section>
</template>
 <script>
export default {
    props: {
        currTask: Object
    },
    name: 'task-modal',
    emits: ['saveTask', 'closeModal'],
    components: {
    },
    data() {
        return {
        };
    },
    created() {
        console.log('Ye Maaaan')
    },
    methods: {
        saveTask() {
            if (this.currTask.status === 'done') this.currTask.doneAt = Date.now()
            this.$emit('saveTask', this.currTask)
            this.$emit('closeModal')
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
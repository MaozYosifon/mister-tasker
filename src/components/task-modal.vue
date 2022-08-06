<template>
    <pre>{{ content }}</pre>
</template>
 <script>
export default {
    props: {
        content: Object
    },
    name: 'task-modal',
    components: {},
    data() {
        return {};
    },
    created() {
        console.log(this.content);
        console.log('WTF ???');
    },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
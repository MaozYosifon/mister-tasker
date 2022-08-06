<template>
    <header class="main-header flex space-between align-center">
        <div class="logo">Logo Img</div>
        <nav class="flex align-center">
            <RouterLink to="/tasker">tasks</RouterLink>
            <RouterLink to="/">Page1</RouterLink>
            <RouterLink to="/">Page2</RouterLink>
        </nav>
    </header>
</template>
 <script>
export default {
    name: 'main-header',
    components: {},
    data() {
        return {

        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>
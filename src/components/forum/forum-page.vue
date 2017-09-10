<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import forumTopicList from './forum-topic-list.vue';
export default {
    data() {
        return {
            msg: 'Hello world!'
        }
    },
    components: {
        forumTopicList
    },
    created() {
        this.$store.dispatch('fetchTopics');
    }
}
</script>

<style>

</style>

<template>
    <div>
        <router-link to="/forum/newtopic">
            <v-btn primary light ripple>Start a new topic</v-btn>
        </router-link>
        <forum-thread-list></forum-thread-list>
        <router-view></router-view>
    </div>
</template>

<script>
import forumThreadList from './forum-thread-list.vue';
export default {
    data() {
        return {
            msg: 'Hello world!'
        }
    },
    components: {
        forumThreadList
    }
}
</script>

<style>

</style>

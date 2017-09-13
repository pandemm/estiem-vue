<template>
    <div>
        <h2 style="text-align: center;">{{event.name}}</h2>
        <div v-html="event.description">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        event() {
            return this.$store.getters.getEventById(this.$route.params.id);
        },
    },

}
</script>

<style>

</style>
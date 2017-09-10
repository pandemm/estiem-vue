<template>
    <div>
        <h2 style="text-align: center;">{{event.Name}}</h2>
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
            console.log(this.$route.params.id);
            return this.$store.getters.getEventById(this.$route.params.id);
        },
    },

}
</script>

<style>
</style>
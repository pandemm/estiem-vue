<template>
    <div>
        <h2>
            {{thread.title}}
            </h2>
        <div v-html="thread.content">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['thread']
}
</script>

<style>

</style>
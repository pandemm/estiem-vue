<template>
    <div class="page">
        <h2>Unfortunately logging in is not available yet.</h2>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
        }
    },
    props: ['lg'],
    filters: {
        formatDate(date) {
            return moment(date).format('DD.MM.YYYY')
        }
    }
}
</script>

<style scoped>

h2 {
    text-align: center;
}
</style>
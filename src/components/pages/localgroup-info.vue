<template>
    <div>
        <div>
            <router-link :to="'localgroup/' + lg.name">
                {{lg.name}}
            </router-link>
            <span v-if="lg.status != 1">
                Guest
            </span>
        </div>
        <div>
            <span>City: {{lg.alias}}</span></br>
            <span>University: {{lg.universityName}}</span></br>
            <span>Member since: {{lg.membershipStart | formatDate}}</span></br>
            <span>Official name: {{lg.officialName}}</span></br>
            <span>Contact: {{lg.email}}</span></br>

        </div>
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

<style>

</style>
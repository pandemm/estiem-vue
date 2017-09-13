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
            <span>Member since: {{lg.membershipStart}}</span></br>
            <span>Official name: {{lg.officialName}}</span></br>
            <span>Contact: {{lg.email}}</span></br>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['lg'],
}
</script>

<style>

</style>
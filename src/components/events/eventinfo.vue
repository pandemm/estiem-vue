<template>
    <div>
        <div id="infobox">
    
        </div>
        <div id="description" v-html="event.Description">
            a
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import eventsmenu from './eventsmenu.vue';
export default {
    data() {
        return {
            msg: 'Hello world!',
        }
    },
    props: ['id'],
    computed: {
        event() {
            console.log(this.$route.params.id);
            return this.$store.getters.getEventById(this.$route.params.id);
        },
    },


}
</script>

<style>
.event-details1 {
    color: #205E44;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

.description {
    max-width: inherit;
    padding: 5px;
}

.event-details2 {
    padding-bottom: 5px;
    margin-left: 5px;
    padding-right: 5px;
    color: black;
    text-decoration: none !important;
    text-align: center;
}

.event-box {
    background-color: #E8EAEA;
    border: 1px solid #bccec7;
    font-weight: bold;
    font-size: medium;
    margin-bottom: 5px;
}
</style>
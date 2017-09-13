<template>
    <div>
        <b-table striped hover :items="eventParticipants" :fields="fields"></b-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            eventParticipants: [],
            fields: {
                last_name: {
                    label: 'Person last name',
                    sortable: true
                },
                first_name: {
                    label: 'Person first name',
                    sortable: false
                },
                age: {
                    label: 'Person age',
                    sortable: true,
                    // Variant applies to teh whole column, including the header and footer
                    variant: 'danger'
                }
            },

        }
    },
    computed: {
        event() {
            console.log(this.$route.params.id);
            return this.$store.getters.getEventById(this.$route.params.id);
        },
        eventId() {
            console.log(this.$route.params.id);
            return (this.$route.params.id);
        },
    },
    methods: {
        fetchEventParticipants(eventid) {
            let url = 'http://new.estiem.org/eventsapi/geteventparticipants/' + this.eventId;
            console.log(url);
            axios.get(url)
                .then((response) => {
                    this.eventParticipants = response.data;
                    console.log(response);
                    this.loading = false;
                });

        },
    },
    created() {
        this.fetchEventParticipants(this.eventId);
    },
}
</script>

<style>
</style>
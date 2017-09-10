<template>
    <div v-if="ready">
        <h2 style="text-align: center;">{{event.Name}}</h2>
        <div class="event-buttons">
            <router-link :to="'/events/information/' + event.Id" style="text-decoration: none;">
                <button type="button" class="btn btn-primary btn-lg" style="background: rgb(165, 201, 187); color: #205e44;">
                    <i class="material-icons" style="vertical-align:middle; font-size:36px;">info</i><br>Information
                </button>
            </router-link>
            <router-link :to="'/events/apply/' + event.Id" style="text-decoration: none;">
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                    <i class="material-icons" style="vertical-align:middle; font-size:36px;">input</i><br>Application
                </button>
            </router-link>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">assignment</i><br>Programme
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">map</i><br>Map
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">people</i><br>Participants
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">local_hotel</i><br>Accomodation
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">flight</i><br>Getting in
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">location_city</i><br>About the city
            </button>

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
                <i class="material-icons" style="vertical-align:middle; font-size:36px;">local_phone</i><br>Contact
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ready: false,
        }
    },
    computed: {
        event() {
            console.log(this.$route.params.id);
            this.ready = true;
            return this.$store.getters.getEventById(this.$route.params.id);
        },
    },

}
</script>

<style>

</style>
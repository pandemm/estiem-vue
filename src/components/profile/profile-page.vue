<template>
    <div id="profile">
        <img style="margin: auto; max-width: 254px;" v-if="ready" :src="'data:image/png;base64,' + user.image" />
        <div style="margin: auto;">
            <h4 class="card-title">{{user.firstNameEnglish}} {{user.lastNameEnglish}}</h4>
            <div>
                <a :href="'tel:' + user.mobilePhone" title="Phone">
                    <i class="material-icons" style="vertical-align:middle">phone</i>
                </a>
                <a :href="'mailto:' + user.firstNameEnglish + user.lastNameEnglish + '@estiem.org'" title="Email">
                    <i class="material-icons" style="vertical-align:middle">email</i>
                </a>
                <a onclick="Skype.tryAnalyzeSkypeUri('chat', '0');" :href="'skype:'+ user.skypeName + '?chat'" title="Skype">
                    <i class="material-icons" style="vertical-align:middle">chat_bubble</i>
                </a>
                <a href="localgroup.html" title="Local Group">
                    <i class="material-icons" style="vertical-align:middle">location_city</i>
                </a>
                <a href="events.html?LocalGroup=Trondheim" title="Events">
                    <i class="material-icons" style="vertical-align:middle">date_range</i>
                </a>
                <a href="http://maps.apple.com/?q=51.507269,-0.127695" title="Home address">
                    <i class="material-icons" style="vertical-align:middle">home</i>
                </a>
                <a href="http://maps.apple.com/?q=51.507269,-0.127695" title="Current location">
                    <i class="fa fa-snapchat" aria-hidden="true"></i>
                </a>
            </div>
            <div>
                Some basic info here: Age, Local Group
            </div>
        </div>
        <b-table v-if="ready" striped hover :items="user.eventsParticipants" :fields="fields">
            <template slot="event" scope="data">
                {{data.item.event.name}}
            </template>
            <template slot="place" scope="data">
                {{data.item.event.place}}
            </template>
            <template slot="dates" scope="data">
                {{data.item.event.startDate.substring(5,7)}}/{{data.item.event.startDate.substring(0,4)}}
            </template>
        </b-table>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    data() {
        return {
            ready: false,
            user: {},
            fields: {
                event: {
                    label: 'Event',
                    sortable: true,
                    'class': 'left-align'
                },
                place: {
                    label: 'Place',
                    sortable: true,
                    'class': 'text-center'
                },
                dates: {
                    label: 'Year',
                    sortable: true,
                }

            }
        }
    },
    created() {
        axios.get('http://new.estiem.org/api/userapi/getuser/15471')
            .then(response => {
                this.user = response.data;
                this.user.eventsParticipants = this.user.eventsParticipants.filter(a => a.registrationStatus == 0 || a.registrationStatus == 5)
                this.ready = true;
            })
    }
}
</script>

<style>
#profile {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

td {
    padding: 10px !important;
}
</style>

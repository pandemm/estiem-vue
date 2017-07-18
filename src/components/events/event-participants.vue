<template>
  <div id="event-apply">
    <v-data-table :loading="loading" no-data-text="No participants were found for this event" v-bind:headers="headers" :items="eps" hide-actions class="elevation-1" id="participants-table">
      <template slot="items" scope="props">
        <td>
          <a :href="'https://www.estiem.org/Internal/default.aspx?PageId=833&mid=988&cmd=show&fp=TRUE&rpid=907&ids='+ props.item.User.Id">{{ props.item.User.Name.Name }}</a>
        </td>
        <td>
          <a :href="'https://www.estiem.org/Internal/default.aspx?PageId=644&mid=668&cmd=show&fp=TRUE&rpid=907&ids='+ props.item.User.LocalGroup.Id">{{ props.item.User.LocalGroup.Name }}</a>
        </td>
        <td>{{ convertRegStatus(props.item.RegistrationStatus) }}</td>
        <td>{{ props.item.RegistrationDate | formatdate }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import moment from 'moment';
import Ckeditor from 'vue-ckeditor2';
import axios from 'axios';
export default {
  data() {
    return {
      eps: [],
      headers: [
        { text: 'Name', value: 'User.Name.Name' },
        { text: 'LG', value: 'User.LocalGroup.Name' },
        { text: 'Status', value: 'RegistrationStatus' },
        { text: 'Application date', value: 'RegistrationDate' },
      ],
      loading: true,
    }
  },
  computed: {
    eventid() {
      console.log(this.$route.params.id);
      return (this.$route.params.id);
    },
  },
  components: {
    Ckeditor,
  },
  methods: {
    fetchEventParticipants(eventid) {
      let eps;
      let url = '/internal/eventsapi/geteventparticipants?id=' + this.eventid;
      console.log(url);
      axios.get(url)
        .then((response) => {
          this.eps = response.data;
          console.log(response);
          console.log(eps);
          this.loading = false;
        });

    },
    convertRegStatus(regstatus) {
      if (regstatus == 0) {
        return "Registered";
      }
      else if (regstatus == 1) {
        return "Waiting";
      }
      else if (regstatus == 2) {
        return "Canceled";
      }
      else if (regstatus == 3) {
        return "Canceled after deadline";
      }
      else if (regstatus == 4) {
        return "Did not show up";
      }
      else if (regstatus == 5) {
        return "Organizer";
      }
      else if (regstatus == 6) {
        return "Application withdrawn";
      }
      else {
        return "Unknown";
      }
    }
  },
  created() {
    this.fetchEventParticipants(this.eventid);
  },
  filters: {
    formatdate(value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY');
      }
    }
  },

}
</script>

<style>
#participants-table a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

#participants-table a:hover {
  text-decoration: underline;
  color: #205E44;
}

#participants-table {
  max-width: 100%
}
</style>
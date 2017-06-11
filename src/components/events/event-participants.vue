<template>
  <div id="event-apply">
    <v-data-table v-bind:headers="headers" :items="eps" hide-actions class="elevation-1">
      <template slot="items" scope="props">
        <td>{{ props.item.User.Name.Name }}</td>
        <td>{{ props.item.User.LocalGroup.Name }}</td>
        <td>{{ props.item.RegistrationStatus }}</td>
        <td>{{ props.item.RegistrationDate }}</td>
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
      let url = 'http://localhost/internal/mvc/events/geteventparticipants?id=' + this.eventid;
      console.log(url);
      axios.get(url)
        .then((response) => {
          this.eps = response.data;
          console.log(response);
          console.log(eps);
        });
    },
  },
  created() {
    console.log("creatd");
    this.fetchEventParticipants(this.eventid);
  },

}
</script>

<style>
#event-apply {
  max-width: 800px;
  margin: auto;
}

.checkbox {
  margin: 0;
}
</style>
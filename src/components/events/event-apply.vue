<template>
  <div id="event-apply">
    <h2>Application to {{this.event.Name}} in {{this.event.Place}}</h2>
    <form>
      <span>Motivation text:</span>
      </br>
      <ckeditor :config="config" v-model="form.MotivationText"></ckeditor>
      <v-checkbox class="checkbox" label="I am vegetarian" v-model="form.Vegetarian"></v-checkbox>
      <v-checkbox class="checkbox" label="I do NOT eat pork" v-model="form.NoPork"></v-checkbox>
      <v-checkbox class="checkbox" label="I agree to the terms and conditions" v-model="terms"></v-checkbox>
      <v-btn @click.native="postApplication">Apply</v-btn>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import moment from 'moment';
import Ckeditor from 'vue-ckeditor2';
import axios from 'axios';
export default {
  data() {
    return {
      msg: 'Hello world!',
      config: {
        toolbar: [
          ['Bold', 'Italic', 'Underline', 'Strike']
        ],
        height: 300
      },
      form: {
        EventId: this.$route.params.id,
        UserId: 0,
        RegistrationDate: moment(),
        RegistrationStatus: 0,
        Vegetarian: false,
        NoPork: false,
        Travel_ArrivalDate: moment(),
        Travel_DepartureDate: moment(),
        MotivationText: "",
        Comments: "",
        VisaRequired: false,
        Visa_Firstname: "",
        Visa_Surname: "",
        Visa_Birthdate: moment(),
        Visa_Birthplace: "",
        Visa_Nationality: "",
        Visa_PassportNumber: "",
        Visa_PassportExpiryDate: moment(),
        Visa_PassportIssuedDate: moment(),
        Visa_PassportIssuedBy: "",
        Visa_Address: "",

      },
      terms: false,
    }
  },
  computed: {
    event() {
      console.log(this.$route.params.id);
      return this.$store.getters.getEventById(this.$route.params.id);
    },
  },
  components: {
    Ckeditor,
  },
  methods: {
    postApplication: function () {
      if (this.validatePost() == false) {
        console.log("false");
        return false;
      }
      console.log("Post");
      let json = JSON.stringify(this.form);
      axios.post('/internal/eventsapi/apply', json)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    validatePost: function () {
      console.log("val");
      if (!this.terms) {
        console.log("notvalid");
        return false;
      }
    }
  }

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
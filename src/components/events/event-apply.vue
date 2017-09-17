<template>
  <div id="event-apply">
    <h2>Application to {{this.event.name}} in {{this.event.place}}</h2>
    <b-form-group>
      <span>Motivation text:</span>
      </br>
      <ckeditor :config="config" v-model="form.motivationText"></ckeditor>
      <b-form-checkbox v-model="form.vegetarian">I am vegetarian</b-form-checkbox>
      <b-form-checkbox v-model="form.noPork">I do NOT eat pork</b-form-checkbox>
      <b-form-checkbox v-model="terms">I agree to the terms and conditions</b-form-checkbox>
      <b-btn @click.native="postApplication">Apply</b-btn>
    </b-form-group>
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
    postApplication: function() {
      return true;
      //   if (this.validatePost() == false) {
      //     console.log("false");
      //     return false;
      //   }
      //   console.log("Post");
      //   let json = JSON.stringify(this.form);
      //   axios.post('/internal/eventsapi/apply', json)
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // },
      // validatePost: function () {
      //   console.log("val");
      //   if (!this.terms) {
      //     console.log("notvalid");
      //     return false;
      //   }
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
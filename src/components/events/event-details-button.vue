<template>
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#event-information" style="background: rgb(165, 201, 187); color: #205e44;">
    <i class="material-icons" style="vertical-align:middle; font-size:36px;">info</i><br>Information
  </button>
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
            if (this.validatePost() == false) {
                console.log("false");
                return false;
            }
            console.log("Post");
            let json = JSON.stringify(this.form);
            axios.post('http://localhost:8081/internal/mvc/events/apply', json)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        validatePost: function() {
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
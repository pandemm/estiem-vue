<template>
    <div>
        <v-text-field name="username" label="Username" id="username" v-model="userName"></v-text-field>
        <v-text-field name="title" label="Title" v-model="title"></v-text-field>
        <ckeditor v-model="content" :config="config"></ckeditor>
        <v-btn primary light ripple @click.native="postTopic">Send message</v-btn>
    </div>
</template>

<script>
import Ckeditor from 'vue-ckeditor2'
import moment from 'moment';
export default {
    data() {
        return {
            msg: 'Hello world!',
            userName: "",
            content: '',
            title: '',
            config: {
                toolbar: [
                    ['Bold', 'Italic', 'Underline', 'Strike']
                ],
                height: 300
            }
        }
    },
    components: {
        Ckeditor,
    },
    methods: {
        postTopic() {
            console.log("posttopic");
            let topic = {
                userName: this.userName,
                content: this.content,
                title: this.title,
                created: moment()
            }
            this.$store.dispatch('addTopic', topic);
            // After succesfully posting a new topic go to the front page of the forum
            this.$router.push('/forum');
        }
    }
}
</script>

<style>

</style>

<template>
    <div>
        <template v-for="thread in threads">
            <v-card class="thread">
                <v-card-row class="thread-title-box">
                    <v-card-title>
                        <span class="thread-title">{{thread.title}}</span>
                    </v-card-title>
                </v-card-row>
                <v-card-text v-html="thread.content">
                </v-card-text>
                <v-divider></v-divider>
                <v-card-row actions>
                    <v-btn flat class="estiem-green-text">View more</v-btn>
                    <v-btn flat class="estiem-green-text">Reply</v-btn>
                    <v-btn flat class="estiem-green-text">Share</v-btn>
                </v-card-row>
            </v-card>
        </template>
    </div>
</template>

<script>
import forumPost from './forum-message.vue';
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
                    ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
                ],
                height: 300
            }
        }
    },
    computed: {
        threads() {
            return this.$store.getters.threads;
        },
    },
}
</script>

<style>
.title {
    font-weight: bold;
}

.thread {
    margin-bottom: 5px;
}

.thread-title-box {
    background-color: #205E44;
}

.thread-title {
    color: white;
}

.estiem-green-text {
    color: #205E44;
}
</style>

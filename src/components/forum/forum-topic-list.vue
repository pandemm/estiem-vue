<template>
    <div>
        <template v-for="topic in topics">
            <b-card class="topic">
                <router-link :to="'/forum/topic/' + topic.topicId">
                    <h4 class="card-title estiem-green-text">{{topic.topic}}</h4>
                </router-link>
                <h6 class="card-subtitle mb-2 text-muted">Posted {{topic.lastPosted | formatTimeSpan}} ago by: {{topic.userName}}</h6>
                <b-link class="estiem-green-text card-link">Reply</b-link>
                <b-link class="estiem-green-text card-link">Share</b-link>
                <b-link class="estiem-green-text card-link">Like</b-link>
            </b-card>
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
        topics() {
            return this.$store.getters.topics;
        },
    },
    filters: {
        formatTimeSpan: function(value) {
            var date = moment();
            var time = moment.duration(date.diff(value));
            return time.humanize();
        }
    }
}
</script>

<style>
.title {
    font-weight: bold;
}

.topic {
    margin-bottom: 10px;
}

.topic-title-box {
    background-color: #205E44;
}

.topic-title {
    color: white;
}

.estiem-green-text {
    color: #205E44;
}
</style>

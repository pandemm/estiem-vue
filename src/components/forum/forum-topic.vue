<template>
    <div>
        <h1>{{topic.topic}}</h1>
        <div v-for="message in topic.forumMessage">
            <forum-message :message="message"></forum-message>
        </div>
    </div>
</template>

<script>
import forumMessage from './forum-message.vue';
import moment from 'moment';
import axios from 'axios';
export default {
    data() {
        return {
            msg: 'Hello world!',
            userName: "",
            content: '',
            title: '',
            topic: ''
        }
    },
    components: {
        forumMessage
    },
    computed: {
        topica() {
            let topicId = this.$route.params.id;
            return this.topics.find(t => t.topicId == topicId);
        },
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
    },
    created() {
        let id = this.$route.params.id;
        axios.get('http://new.estiem.org/api/forumapi/Gettopic?id=' + id)
            .then(response => {
                console.log('a');
                this.topic = response.data;
            });
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

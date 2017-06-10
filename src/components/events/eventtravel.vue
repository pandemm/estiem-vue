<template>
    <div class="description">
        Here are some protips on how to travel to {{to}}.</br>
        <a :href="'https://www.rome2rio.com/s/' + from + '/' + to">Rome2Rio</a>
    </div>
</template>

<script>
import moment from 'moment';
import eventsmenu from './eventsmenu.vue';
export default {
    data() {
        return {
            msg: 'Hello world!',
            from: 'Tampere',
            to: 'Eindhoven'
        }
    }
}
</script>

<style>
</style>
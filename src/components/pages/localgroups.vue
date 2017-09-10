<template>
    <gmap-map v-if="mapIsVisible":center="center" :zoom="4" style="width: 1000px; height: 600px">

        <gmap-marker :key="index" v-for="(m, index) in lgs" :position="m.position" :clickable="true" @click="m.infoWinOpen=!m.infoWinOpen">
            <gmap-info-window :opened="m.infoWinOpen">{{m.infoWinText}}</gmap-info-window>
        </gmap-marker>
    </gmap-map>
</template>

<script>
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCmNqGR4Z1y88HEe5GI8i4wDzJebAHalIg'
    }
});

export default {
    data() {
        return {
            mapIsVisible: false,
            lgs: [],
            center: { lat: 53.0, lng: 15.0 },
            markers: [{
                position: { lat: 61.3, lng: 23.46 },
                infoWinOpen: false,
                infoWinText: 'Tampere'
            }, {
                position: { lat: 11.0, lng: 11.0 },
                infoWinOpen: false,
            }]
        }
    },
    computed: {
        event() {
            console.log(this.$route.params.id);
            return this.$store.getters.getEventById(this.$route.params.id);
        },
    },
    created() {
        axios.get('http://new.estiem.org/api/localgroupapi/localgroup')
            .then(response => {
                console.log(response.data)
                this.lgs = response.data.filter(lg => {
                    if (lg.gpslocation !== null && lg.status === 1)
                    {
                        return lg;
                    }
                                        }
                )
                    .map((lg) => {
                        console.log(lg)
                        if (lg.gpslocation !== null) {
                            return {
                                position: {
                                    lat: Number(lg.gpslocation.split(',')[0]),
                                    lng: Number(lg.gpslocation.split(',')[1])
                                },
                                infoWinOpen: false,
                                infoWinText: lg.name
                            }
                        }
                    });
                    this.mapIsVisible = true;
            })
    }

}
</script>

<style>

</style>
<template>
    <gmap-map v-if="mapIsVisible":center="center" :zoom="4" :style="'width: 100%; height: ' + height + 'px'">
        <template  v-for="(m, index) in lgs">
        <gmap-marker :key="index" :position="m.position" :clickable="true" @click="openInfoBox(m)">
            <gmap-info-window :opened="m.infoWinOpen"><lg-info v-bind="m"></lg-info></gmap-info-window>
        </gmap-marker>
        </template>
    </gmap-map>
</template>

<script>
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import lgInfo from './localgroup-info.vue';

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
        }
    },
    components: { lgInfo },
    computed: {
        height() {
            return window.innerHeight - 86;
        }
    },
    methods: {
        openInfoBox(lg) {
            this.lgs.forEach(lg => lg.infoWinOpen = false)
            lg.infoWinOpen= true;
        }
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
                        if (lg.gpslocation !== null) {
                            return {
                                position: {
                                    lat: Number(lg.gpslocation.split(',')[0]),
                                    lng: Number(lg.gpslocation.split(',')[1])
                                },
                                infoWinOpen: false,
                                infoWinText: lg.name,
                                lg
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
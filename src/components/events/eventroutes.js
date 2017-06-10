import eventlist from './eventlist.vue';
import eventinfo from './eventinfo.vue';
import eventtravel from './eventtravel.vue';
import eventApply from './event-apply.vue'

const eventroutes = [
  {
    path: 'eventlist',
    name: 'eventlist',
    component: eventlist,
  },
  {
    path: 'info/:id',
    name: 'eventlist',
    component: eventlist,
  },
  {
    path: 'travel/:id',
    name: 'travel',
    component: eventlist,
  },
  {
    path: 'apply/:id',
    name: 'apply',
    component: eventApply
  }
];

export default eventroutes;

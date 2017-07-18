import eventlist from './eventlist.vue';
import eventinfo from './eventinfo.vue';
import eventtravel from './eventtravel.vue';
import eventApply from './event-apply.vue';
import eventParticipants from './event-participants.vue';

const eventroutes = [
  {
    path: '',
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
    path: 'participants/:id',
    name: 'travel',
    component: eventParticipants,
  },
  {
    path: 'apply/:id',
    name: 'apply',
    component: eventApply
  }
];

export default eventroutes;

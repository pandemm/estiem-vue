import eventlist from './eventlist.vue';
import eventinfo from './eventinfo.vue';
import eventtravel from './eventtravel.vue';
import eventApply from './event-apply.vue';
<<<<<<< HEAD
import eventDetails from './event-details.vue';
import eventInformation from './event-information.vue';
=======
>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
import eventParticipants from './event-participants.vue';

const eventroutes = [
  {
    path: '',
    name: 'eventlist',
    component: eventlist,
  },
  {
    path: 'info/:id',
    name: 'eventinfo',
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
  },
  {
    path: 'details/:id',
    name: 'details',
    component: eventDetails
  },
  {
    path: 'information/:id',
    name: 'information',
    component: eventInformation
  },
  {
    path: 'participants/:id',
    name: 'participants',
    component: eventParticipants
  },
];

export default eventroutes;

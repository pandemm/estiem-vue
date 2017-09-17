import eventlist from './event-list-page.vue';
import eventinfo from './eventinfo.vue';
import eventtravel from './eventtravel.vue';
import eventApply from './event-apply.vue';
import eventDetails from './event-details.vue';
import eventInformation from './event-information.vue';
import eventParticipants from './event-participants.vue';

const eventroutes = [
  {
    path: 'eventlist',
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
    name: 'participants',
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
];

export default eventroutes;

<template>
  <div>
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddEvent />
    <div class="col-md-12">
      <EventItem
        v-for="(eventItem, idx) in this.$store.state.events"
        :event="eventItem"
        :key="idx"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp';
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent, EventItem
  },
  mounted() {
    eventsRef.on('value', (snap) => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      })

      this.$store.dispatch('setEvents', events);
    });
  }
}
</script>

<template>
  <div>
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <form action="" class="form col-md-12" v-if="showForm" @submit.prevent="addEvent">
      <div class="col-md-6">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="event.title">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="event.description">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Date</label>
          <input type="date" class="form-control" v-model="event.date">
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" class="form-control" v-model="event.location">
        </div>
      </div>
      <button type="submit" class="btn btn-sm btn-primary">Add Event</button>
    </form>
  </div>
</template>

<script>
import { eventsRef } from '../firebaseApp';

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: '',
      },
      showForm: false,
    }
  },

  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
      console.log('Exec addEvent()')
    }
  }
}
</script>

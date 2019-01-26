<template>
  <div class="form-inline">
    <h3>Sign In</h3>
    <form @submit.prevent="signIn">
      <div class="form-group">
        <input 
          type="text"
          placeholder="email"
          class="form-control"
          v-model="email"
        />
        <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="password"
        />
        <br><br>
        <button type="submit" class="btn btn-primary" @click="signIn">Sign In</button>
      </div>
    </form>
    <br>
    <router-link to="/signup">Not a user? Sign up</router-link>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.error = err;
        })
    }
  }
}
</script>

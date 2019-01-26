<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
    <form @submit.prevent="signUp">
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
        <button type="submit" class="btn btn-success" @click="signUp">Sign Up</button>
      </div>
    </form>
    <br>
    <router-link to="/signin">Already a user? Sign in</router-link>
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
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.error = err;
        })
    }
  }
}
</script>

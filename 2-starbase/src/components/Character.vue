<template>
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title">{{character.name}}</h4>
        <p class="card-text">Height: {{character.height}} cm</p>
        <p class="card-text">Mass: {{character.mass}} kg</p>
        <p class="card-text">Hair Color: {{character.hair_color}}</p>
        <p class="card-text">Eye Color: {{character.eye_color}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.test/people.php?id=${id}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(json => this.character = json)
    },
    switchCharacter() {
      console.log('onClick swicthCharacter');
      let randomID = Math.ceil(Math.random() * 83);
      this.fetchCharacter(randomID);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
}
</script>

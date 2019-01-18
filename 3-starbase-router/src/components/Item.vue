<template>
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
        <div v-for="(value, key, idx) in item" :key="idx">
          <div v-if="idx < 5">
            <strong >{{key}}</strong>: {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['passedItem', 'type'],
  data() {
    return {
      item: {}
    }
  },
  methods: {
    switchItem() {
      const randomID = Math.ceil(Math.random() * 63);
      fetch(`http://swapi.test/${this.type}.php?id=${randomID}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(json => this.item = json)
    }
  },
  created() {
    this.item = this.passedItem;
  }
}
</script>

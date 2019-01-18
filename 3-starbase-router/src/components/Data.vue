<template>
  <div class="col-md-12">
    <Item
      v-for="(item, index) in items"
      :key="index"
      :passedItem="item"
      :type="type"
    />
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;
      let initialIDs = [1,13,14];

      for (const idx in initialIDs) {
        const id = initialIDs[idx];
        console.log('id', id)

        fetch(`http://swapi.test/${this.type}.php?id=${id}`, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => response.json())
        .then(json => this.items.push(json))
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    Item
  }
}
</script>


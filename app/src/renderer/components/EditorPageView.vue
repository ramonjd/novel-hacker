<template>
  <div>
    <h1>Editor</h1>
    <button @click="incrementMain">+</button>
    <button @click="decrementMain">-</button>
    <div class="field">
      <label class="label">Message {{ mainCounter }}</label>
      <p class="control">
        <textarea @keyup="incrementMain" class="textarea" placeholder="Textarea"></textarea>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    beforeCreate () {
      console.log(this.$store);
    },
    components: {},
    name: 'editor',
    computed: mapGetters([
      'mainCounter',
    ]),
    methods: mapActions([
      'decrementMain',
      'incrementMain',
    ]),
  };
</script>

<style scoped>

</style>

<template>
  <section class="section">
    <progress class="progress" value="15" max="100">15%</progress>
    <h1>Editor</h1>
    <button @click="incrementMain">+</button>
    <button @click="decrementMain">-</button>
    <div class="field">
      <label class="label">Message {{ mainCounter }}</label>
      <p class="control">
        <textarea @keyup="incrementMain" class="textarea" placeholder="Textarea"></textarea>
      </p>
    </div>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary">Submit</button>
      </p>
      <p class="control">
        <button class="button is-link">Cancel</button>
      </p>
    </div>
  </section>
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

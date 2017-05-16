<template>
  <section class="section">
    <progress class="progress" value="15" max="100">15%</progress>
    <h1>Editor</h1>
    <div class="field">
      <label class="label">wordCount {{ wordCount }}</label>
      <p class="control">
        <textarea @keyup="updateWordCount" class="textarea" placeholder="Textarea"></textarea>
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
    beforeCreate() {
      console.log(this.$store);
    },
    components: {},
    name: 'editor',
    computed: mapGetters([
      'wordCount',
    ]),
    methods: mapActions([
      'updateWordCount',
    ]),
  };
</script>

<style scoped>

</style>

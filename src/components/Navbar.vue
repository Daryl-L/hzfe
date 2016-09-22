<template lang="html">
  <header>
    <nav class="navigation">
      <a>HZFE</a>
    </nav>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(this)
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style type="scss">
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    padding: 0 58px;
  }
</style>

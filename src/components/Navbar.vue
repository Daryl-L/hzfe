<template lang="html">
  <header>
    <nav class="navigation">
      <a class="logo">HZFE</a>
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
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    padding: 0 58px;

    .logo {
      display: inline-block;
      padding-top: 10px;
      font-size: 25px;
      color: white;
      background-color:rgba(0, 0, 0, 0);
    }
  }
</style>

<template lang="html">
  <Navbar />
</template>

<script>
import Navbar from 'Navbar'

export default {
  data () {
    return {
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(to right,  rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
</style>

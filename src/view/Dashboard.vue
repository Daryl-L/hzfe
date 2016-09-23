<template lang="html">
  <Navbar active="0"></Navbar>
  <section>
    <h1 class="show-start">首页</h1>
  </section>
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
    background: rgb(38,143,208);
    background: -moz-linear-gradient(left, rgba(38,143,208,0.8) 0%, rgba(95,86,172,0.8) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(38,143,208,0.8)), color-stop(100%,rgba(95,86,172,0.8)));
    background: -webkit-linear-gradient(left, rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
    background: -o-linear-gradient(left, rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
    background: -ms-linear-gradient(left, rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
    background: linear-gradient(to right, rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#268fd0', endColorstr='#5f56ac',GradientType=1 );
    background: linear-gradient(to right,  rgba(38,143,208,0.8) 0%,rgba(95,86,172,0.8) 100%);
    color: white;
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

  .show-start {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -150px;
    width: 300px;
    height: 300px;
    font-size: 100px;
    animation: show-start 4s 1;
    //Infinite
    transition: transform, opacity 3s ease-in;
  }

  @keyframes show-start {
    0% {
      opacity: 0;
      transform: translate3d(-300px, -300px, -300px) rotate(-360deg);
    }
    100% {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
  }
</style>

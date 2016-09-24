<template lang="html">
  <Navbar active="0"></Navbar>
  <div class="content"></div>
</template>

<script>
import Navbar from 'Navbar'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'

export default {
  data () {
    return {
      paopao: 0
    }
  },
  components: {
    Navbar
  },
  methods: {
    create (paopao) {
      // 生产随机数
      var num = ~~(Math.random() * 4 + 1)
      // var src = './' + num + '.png'
      var arr = [img1, img2, img3, img4]
      var div = document.createElement('div')
      div.className = 'paopao'
      div.style.backgroundImage = 'url(' + arr[num] + ')'
      document.querySelector('.content').appendChild(div)
      if (this.paopao > 15) {
        clearTimeout(paopao)
      }
    }
  },
  ready () {
    const self = this
    this.create()
    const paopao = setInterval(function () {
      self.paopao = self.paopao + 1
      self.create(paopao)
    }, 15000)
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
  .hide {
    display: none;
  }

  .paopao {
      position: absolute;
      bottom: 100%;
      right: 100%;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-size: cover;
      animation: paopao 40s 1;
      transition: all 0.5s ease-out-in;
    }

    @keyframes paopao {
      0% {
        bottom: 0;
        right: 0;
        width: 50px;
        height: 50px;
      }

      20% {
        bottom: 40%;
        right: 20%;
        width: 100px;
        height: 100px;
        transform: rotate(0deg);
      }

      30% {
        bottom: 40%;
        right: 30%;
        width: 100px;
        height: 100px;
        transform: rotate(180deg);
      }

      40% {
        bottom: 60%;
        right: 30%;
        width: 80px;
        height: 80px;
        transform: rotate(0deg);
      }

      60% {
        bottom: 50%;
        right: 40%;
        width: 100px;
        height: 100px;
        transform: rotate(0deg);
      }

      70% {
        bottom: 60%;
        right: 30%;
        width: 50px;
        height: 50px;
        transform: rotate(0deg);
      }

      80% {
        bottom: 70%;
        right: 50%;
        width: 20px;
        height: 20px;
        transform: rotate(360deg);
      }

      90% {
        bottom: 60%;
        right: 80%;
        width: 50px;
        height: 50px;
        transform: rotate(180deg);
      }


      100% {
        bottom: 100%;
        right: 150%;
        width: 150px;
        height: 150px;
      }
    }
</style>

<template lang="html">
  <header>
    <nav class="navigation">
      <a class="logo" href="/">HZFE</a>
      <ul class="navbar">
        <li>
          <a class="active">首页</a>
        </li>
        <li>
          <a>文章</a>
        </li>
        <li>
          <a>动态</a>
        </li>
        <li>
          <a>关于组织</a>
        </li>
      </ul>
      <div class="nav-border"></div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  ready () {
    const border = document.querySelector('.nav-border')
    const self = this
    Array.from(document.querySelectorAll('ul.navbar li')).forEach((val, index) => {
      val.addEventListener('mouseover', () => {
        border.style.transform = 'translate3d(' + (index * 100) + 'px, 0, 0)'
      })
      val.addEventListener('mouseout', () => {
        border.style.transform = 'translate3d(' + (self.active * 100) + 'px, 0, 0)'
      })
    })
  }
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
    padding: 0 60px;
    background-color:rgba(255, 255, 255, 0.1);

    .logo {
      float: left;
      width: 100px;
      line-height: 60px;
      font-size: 25px;
      letter-spacing: 2px;
      color: white;
      cursor: pointer;
    }
  }

  .navbar {
    float: left;

    li {
      float: left;
      width: 100px;
      height: 60px;

      a {
        display: inline-block;
        color: white;
        width: 100%;
        line-height: 60px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  .nav-border {
    position: fixed;
    width: 100px;
    height: 1px;
    background-color: white;
    top: 59px;
    left: 160px;
    transform: translate3d(0, 0, 0);
    transition: transform .5s cubic-bezier(.86,0,.07,1),-webkit-transform .5s cubic-bezier(.86,0,.07,1);
  }
</style>

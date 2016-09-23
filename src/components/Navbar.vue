<template lang="html">
  <header>
    <nav class="navigation">
      <a class="logo" href="/">HZFE</a>
      <span class="drop" @click="openMenu">menu</span>
      <ul class="navbar">
        <li v-for="menu in menus">
          <a v-link="{name: menu.name, exact: true}">{{menu.text}}</a>
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
      menus: [
        {
          name: 'Dashboard',
          text: '首页'
        },
        {
          name: 'Article',
          text: '文章'
        },
        {
          name: 'Dynamic',
          text: '动态'
        },
        {
          name: 'About',
          text: '关于组织'
        }
      ],
      open: true
    }
  },
  props: ['active'],
  methods: {
    openMenu () {
      var menu = document.querySelector('.navbar')
      if (this.open) {
        menu.style.transform = 'translate3d(-500px, 0px, 0)'
        this.open = false
      } else {
        menu.style.transform = 'translate3d(0, 0px, 0)'
        this.open = true
      }
    }
  },
  ready () {
    const border = document.querySelector('.nav-border')
    const self = this
    // 移动border
    border.style.transform = 'translate3d(' + (self.active * 100) + 'px, 0, 0)'
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
  header {
    width: 100%;
    height: 60px;
  }

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

  span.drop {
    position: absolute;
    top: 20px;
    color: white;
    right: 20px;
    cursor: pointer;
    display: none;
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

      a.active {
        opacity: 0.8;
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

  @media screen and (max-width: 550px) {
    header {
      height: 100px;
    }

    .navigation {
        padding: 0;
    }

    .navigation a.logo {
      float: none;
      margin: auto;
      display: block;
    }

    span.drop {
      display: block;
    }

    .nav-border {
      display: none;
    }

    .navbar {
      position: absolute;
      left: 50%;
      margin-left: -160px;
      width: 320px;
      height: 40px;
      transition: transform .5s cubic-bezier(.86,0,.07,1),-webkit-transform .5s cubic-bezier(.86,0,.07,1);
      transform: translate3d(0, 0px, 0);

      li {
        float: left;
        width: 80px;
        height: 40px;

        a {
          display: inline-block;
          color: white;
          width: 100%;
          line-height: 40px;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
        }

        a.active {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }


  @media screen and (min-width: 550px) {
    .navbar {
        transform: translate3d(0, 0, 0)!important;
    }
  }
</style>

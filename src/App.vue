<template>
  <div id="app">
    <header>
      <nav class="navbar is-fixed-top is-light" >
        <div class="navbar-brand">
          <a class="navbar-item">
            <img id="logo-img" src="https://www.gravatar.com/avatar/fc0c2e9fb3ae0382d806ffcbfd098156?s=100" width="100" height="100" />
          </a>
          <div class="navbar-item has-text-weight-bold">Welcome to My website, I am Laszlo Hornyak</div>
          <div role="button" class="navbar-burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div class="navbar-menu" id="mainNav is-dark" :class="{'is-active': navIsActive}">
          <div class="navbar-end">
            <a class="navbar-item has-text-info is-active">
              Blog
            </a>
            <a class="navbar-item has-text-info">
              Projects
            </a>
            <a class="navbar-item has-text-info">
              About Me
            </a>
            <a class="navbar-item has-text-info">
              Contact
            </a>
            <!--span class="navbar-item">
              <a class="button is-danger is-inverted">
                Admin Page
              </a>
            </span-->
          </div>
        </div>
      </nav>
    </header>

    <section class="section" id="main-section">
      <div class="container is-fluid">
        <router-view/>
      </div>
    </section>

    <footer>
        <nav class="navbar is-fixed-bottom is-light">
        <div class="container has-text-centered" id="footer">
          <span class="is-capitalized" >© All rights reserved, Laszlo Hornyak 2018</span>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    this.$snackbar.open({
      message: 'I use cookies to ensure you get the best experience. I assume you’re cool with that if you continue to use our site!',
      position: 'is-bottom-right',
      indefinite: true
    })
    return {
      navIsActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.navIsActive = !this.navIsActive
    }
  }
}
</script>

<style>
#logo-img {
  max-height:100px;
  border-radius:50%;
}
#footer {
  display: block;
  padding-top:15px;
}
#main-section {
  padding-top: 120px;
  padding-bottom: 70px;
}
</style>

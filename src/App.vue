<template>
  <div id="app">
    <header>
      <nav class="navbar is-fixed-top is-light" >
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img id="logo-img" src="https://www.gravatar.com/avatar/fc0c2e9fb3ae0382d806ffcbfd098156?s=100" width="100" height="100" />
          </router-link>
          <div class="navbar-item has-text-weight-bold">Welcome to My website, I am Laszlo Hornyak</div>
          <div role="button" class="navbar-burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div class="navbar-menu" id="mainNav is-dark" :class="{'is-active': navIsActive}">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item has-text-info">
              Blog
            </router-link>
            <router-link to="/projects" class="navbar-item has-text-info">
              Projects
            </router-link>
            <router-link to="/about" class="navbar-item has-text-info">
              About Me
            </router-link>
            <router-link to="/contact" class="navbar-item has-text-info">
              Contact
            </router-link>
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

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #209cee;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

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

.router-link-exact-active {
  background-color: #e8e8e8;
}
</style>

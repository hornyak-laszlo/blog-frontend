<template>
  <div>
    <header>
      <nav class="navbar is-fixed-top is-light">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <img id="logo-img" src="https://www.gravatar.com/avatar/fc0c2e9fb3ae0382d806ffcbfd098156?s=100" width="100" height="100">
          </nuxt-link>
          <div class="navbar-item has-text-weight-bold">
            Welcome to My website, I am Laszlo Hornyak
          </div>
          <div @click="toggleMenu" :class="{'is-active': navIsActive}" role="button" class="navbar-burger" data-target="mainNav">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div :class="{'is-active': navIsActive}" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link to="/" class="navbar-item has-text-info">
              About Me
            </nuxt-link>
            <nuxt-link to="/articles" class="navbar-item has-text-info">
              Articles
            </nuxt-link>
            <nuxt-link to="/courses" class="navbar-item has-text-info">
              Courses
            </nuxt-link>
            <nuxt-link to="/contact" class="navbar-item has-text-info">
              Contact
            </nuxt-link>
          </div>
        </div>
      </nav>
    </header>

    <section id="main-section" class="section">
      <div class="container is-fluid">
        <nuxt />
      </div>
    </section>

    <footer>
      <nav class="navbar is-fixed-bottom is-light">
        <div id="footer" class="container has-text-centered">
          <span class="is-capitalized">
            © All rights reserved, Laszlo Hornyak {{ new Date().getFullYear() }}
          </span>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navIsActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.navIsActive = !this.navIsActive
    }
  }
}
</script>

<style scoped>
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

.nuxt-link-exact-active {
  background-color: #e8e8e8;
}
</style>

<template>
  <div>
    <header>
      <nav class="navbar is-fixed-top is-light" >
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <img id="logo-img" src="https://www.gravatar.com/avatar/fc0c2e9fb3ae0382d806ffcbfd098156?s=100" width="100" height="100" />
          </nuxt-link>
          <div class="navbar-item has-text-weight-bold">Welcome to My website, I am Laszlo Hornyak</div>
          <div role="button" class="navbar-burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{'is-active': navIsActive}">
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

    <section class="section" id="main-section">
      <div class="container is-fluid">
        <nuxt/>
      </div>
    </section>

    <footer>
        <nav class="navbar is-fixed-bottom is-light">
        <div class="container has-text-centered" id="footer">
          <span class="is-capitalized" >© All rights reserved, Laszlo Hornyak {{new Date().getFullYear()}}</span>
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
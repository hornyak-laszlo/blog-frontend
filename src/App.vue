<template>
  <div id="app">
    <header>
      <nav class="navbar is-fixed-top" >
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:8080">
              <img src="https://www.gravatar.com/avatar/fc0c2e9fb3ae0382d806ffcbfd098156?s=100" style="max-height:100px;;border-radius:50%" width="100" height="100" />
            </a>
            <span class="navbar-item has-text-weight-bold">
            Welcome to My Blog, I am Laszlo Hornyak
            </span>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Blog
              </a>
              <a class="navbar-item has-text-info">
                About Me
              </a>
              <a class="navbar-item has-text-info">
                Contact
              </a>
              <span class="navbar-item">
                <a class="button is-danger is-inverted">
                  Admin Page
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <section class="section">
      <div class="container is-fluid">
        <router-view/>
      </div>
    </section>

    <footer>
        <nav class="navbar is-fixed-bottom">
        <div class="container" id="footer">
          <span class="is-capitalized">Some nice stuff comes here</span>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
#footer {
  display: block;
}
.section {
  padding-top: 120px;
  padding-bottom: 70px;
}
</style>

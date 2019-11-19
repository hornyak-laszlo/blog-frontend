<template>
  <b-collapse class="card">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">
        SKILLS
      </p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="has-text-weight-bold">
          Languages
        </p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">
                Hungarian
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">
                Native
              </span>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="is-italic">
                English
              </span>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">
                C1 Level
              </span>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">
                German
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">
                C1 Level
              </span>
            </div>
          </div>
        </div>
        <p class="has-text-weight-bold">
          Driving License
        </p>
        <p>
          Class B
        </p>
        <p class="has-text-weight-bold">
          Programming languages and frameworks
        </p>
        <p class="is-italic">
          Prior experience
        </p>
        <p>
          Amazon Web Services, Android, C, C++, Java EE, Matlab, Python, R, Scala
        </p>
        <p class="is-italic">
          Proficient
        </p>
        <p>
          CodeIgniter, Java, Laravel, ReactJS
        </p>
        <p class="is-italic">
          Expert
        </p>
        <p>
          Angular, Bootstrap, CSS, ExpressJS, Google Cloud Platform, HTML, JavaScript, MongoDB, MySQL, NodeJS, PHP, Vue.js, Vuetify
        </p>
        <p class="has-text-weight-bold">
          Soft skills and qualities
        </p>
        <p>
          Good problem solving, quick of understanding, creative thinking.
        </p>
        <p>
          Openness and desire to learn and develop.
        </p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
    }
  }
}
</script>

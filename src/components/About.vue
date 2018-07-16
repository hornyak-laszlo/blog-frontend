<template>
  <div>
    <h1 class="title">About me</h1>
    <h2 class="subtitle">About me</h2>
    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header">
          <p class="card-header-title">
            EDUCATION
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-weight-bold">Electrical Engineering BSc.</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Budapest University of Technology and Economics (HU)</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">September 2007 – June 2011</span>
              </div>
            </div>
          </div>
          <p>Embedded Systems Department - Control Systems Specialization</p><hr>
          <p class="has-text-weight-bold">Business Informatics MSc.</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Budapest University of Technology and Economics (HU)</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">September 2011 – June 2013</span>
              </div>
            </div>
          </div>
          <p>Service Development and Management Department - Service-Oriented Architectures Specialization</p>
        </div>
      </div>
    </b-collapse>
    <br>
    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header">
          <p class="card-header-title">
            WORK EXPERIENCE
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-weight-bold">Android Developer</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Concept Online Kft., Budapest (HU)</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">July 2010 – August 2010</span>
              </div>
            </div>
          </div>
          <p>During this 6 weeks long professional practice, I learnt the basics of Java and Android development,
then implemented an online image uploader application.</p><hr>
          <p class="has-text-weight-bold">Test Engineer</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Pentalab Kft., Budapest (HU)</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">January 2012 – August 2012</span>
              </div>
            </div>
          </div>
          <p>During this part-time job I got to know the basics of testing and tested several C/C++ program codes,
which ran on the embedded system of the ALSTOM metro vehicles.</p><hr>
          <p class="has-text-weight-bold">Full Stack Software Engineer</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Concept Online Kft., Budapest (HU)</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">August 2012 – February 2016</span>
              </div>
            </div>
          </div>
          <p>During this job I learnt a lot about website development, databases and I got to know several
frameworks and libraries. Our stack contained PHP, NodeJs, AngularJS with MySQL and MongoDB.
I worked on many projects in team and alone too, as well in agile development environment. I learnt
the administration of Linux based operating systems and the Git version control system. Some of my
biggest projects were a social media site, a vehicle tracking site, a B2B site and an education site.</p><hr>
          <p class="has-text-weight-bold">Full Stack Software Engineer</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Compronet GmbH., Fürth</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">March 2016 –</span>
              </div>
            </div>
          </div>
          <p>During this job I improved my website development skills. I worked usually in a team of 2-3 people.
For development we used NodeJs, Angular stack with MongoDB and/or external REST API service.
Our project management toolset was from Atlassian (Jira, Confluence, Bitbucket). Some of my
biggest projects were a working clothes administration site, a weather statistics analyzer site and a car
tracking statistical site.</p>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
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
        <p class="has-text-weight-bold">Full Stack Software Engineer</p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">BOTfriends GmbH., Würzburg</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">Ocober 2018 –</span>
            </div>
          </div>
        </div>
        <p>During this job I learnt a lot about chatbots and Google Cloud Platform. I worked in more teams of 2-5 people.
For development we use NodeJs, Vue.js, MongoDB, Google Cloud Platform and external REST API services.
Some of my biggest projects were an Agent System (Bosch) and more Dialogflow based chatbots.</p><hr>
        <p class="has-text-weight-bold">Full Stack Software Engineer</p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">Compronet GmbH., Fürth</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">March 2016 – September 2018</span>
            </div>
          </div>
        </div>
        <p>During this job I improved my website development skills. I worked usually in a team of 2-3 people.
For development we used NodeJs, Angular stack with MongoDB and/or external REST API service.
Our project management toolset was from Atlassian (Jira, Confluence, Bitbucket). Some of my
biggest projects were a working clothes administration site (DBL), a weather statistics analyzer site and a car
tracking statistical site (BMW).</p><hr>
        <p class="has-text-weight-bold">Full Stack Software Engineer</p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">Concept Online Kft., Budapest</p>
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
biggest projects were a social media site, a vehicle tracking site, a B2B site (Mercedes-Benz) and an education site.</p><hr>
        <p class="has-text-weight-bold">Test Engineer</p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">Pentalab Kft., Budapest</p>
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
        <p class="has-text-weight-bold">Android Developer</p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">Concept Online Kft., Budapest</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">July 2010 – August 2010</span>
            </div>
          </div>
        </div>
        <p>During this 6 weeks long professional practice, I learnt the basics of Java and Android development,
then implemented an online image uploader application.</p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'WorkExperience',
  data () {
    return {
    }
  }
}
</script>

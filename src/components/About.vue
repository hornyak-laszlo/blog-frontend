<template>
  <div>
    <h1 class="title">About me</h1>
    <h2 class="subtitle">Some information about me</h2>
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
    <br>
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
        </div>
      </div>
    </b-collapse>
    <br>
    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header">
          <p class="card-header-title">
            MAIN PROJECTS
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-weight-bold">Working clothes administration site</p>
          <ul>
            <li><i>Backend:</i> ExpressJS (NodeJS) - MongoDB - IBM AS400</li>
            <li><i>Frontend:</i> AngularJS - Bootstrap 3</li>
            <li>
              We used the MEAN Stack for this project. We got the data from a remote service, provided by an
              IBM AS400 server. We used a MongoDB database mostly for caching. Our backend was
              developed as a REST API. Our frontend was created in AngularJS. We used Bootstrap to make
              the design nice and responsive.
            </li>
            <li>
              This was a really complex site containing several administration pages and statistical modules.
              The administration pages were ticket based. For every interaction the user maintained a ticket
              (size changed, repair needed, new clothes needed ...). On the statistical pages we showed for
              example the number of outgoing and incoming clothes on chart and table as well.
            </li>
          </ul>
          <p class="has-text-weight-bold">Car tracking site</p>
          <ul>
            <li><i>Backend:</i> Remote REST API</li>
            <li><i>Frontend:</i> AngularJS 1.5 (component based, ES6) - Bootstrap 3</li>
            <li>
              This was an only frontend project. We got the data from a REST API provided by another
              company. We used the newest stable AngularJS 1.5 with the new ES6 syntax. We used
              component based architecture, with that the maintainability of our codebase dramatically
              increased. For the building process we used Webpack.
            </li>
            <li>
              This site was about tracking the route of the cars, showing and administrating the sessions of the
              routes. We showed the routes of the cars on a map, and provided administration pages for the
              sessions and cars. We had as well statistical diagrams about the runs, containing the speed,
              consumption and other data.
            </li>
          </ul>
        </div>
      </div>
    </b-collapse>
    <br>
    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header">
          <p class="card-header-title">
            SKILLS
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-weight-bold">Languages</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">Hungarian</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">Native</span>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="is-italic">English</span>&nbsp;
                <span> - English intermediate level exam (2011)</span>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">C1 Level</span>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-italic">German</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-italic">C1 Level</span>
              </div>
            </div>
          </div>
          <p class="has-text-weight-bold">Programming languages and frameworks</p>
          <p class="is-italic">Prior experience</p>
          <p>Android, C, C++, Java EE, Matlab, Python, R, Scala</p>
          <p class="is-italic">Proficient</p>
          <p>CodeIgniter, Java, Laravel, React, Vue</p>
          <p class="is-italic">Expert</p>
          <p>Angular, Bootstrap, CSS, ExpressJS, HTML, JavaScript, MongoDB, MySQL, PHP</p>
          <p class="has-text-weight-bold">Soft skills and qualities</p>
          <p>Good problem solving, quick of understanding, creative thinking.</p>
          <p>Openness and desire to learn and develop.</p>
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

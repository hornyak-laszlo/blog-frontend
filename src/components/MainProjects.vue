<template>
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
              I used the MEAN Stack for this project. I got the data from a remote service, provided by an
              IBM AS400 server. I used a MongoDB database mostly for caching. The backend was
              developed as a REST API. The frontend was created in AngularJS. I used Bootstrap to make
              the design nice and responsive.
            </li>
            <li>
              This was a really complex site containing several administration pages and statistical modules.
              The administration pages were ticket based. For every interaction the user maintained a ticket
              (size changed, repair needed, new clothes needed ...). On the statistical pages I showed for
              example the number of outgoing and incoming clothes on chart and table as well.
            </li>
          </ul>
          <p class="has-text-weight-bold">Car tracking site</p>
          <ul>
            <li><i>Backend:</i> Remote REST API</li>
            <li><i>Frontend:</i> AngularJS 1.5 (component based, ES6) - Bootstrap 3</li>
            <li>
              This was an exclusively frontend project. I got the data from a REST API provided by another
              company. I used the (at this time) newest stable AngularJS 1.5 with the new ES6 syntax. I used
              component based architecture, with that the maintainability of our codebase dramatically
              increased. For the building process I used Webpack.
            </li>
            <li>
              This site was about tracking, visualizing the route of the cars and administrating the sessions of the
              routes. I showed the routes of the cars on a map, and provided dashboard pages for the
              sessions and cars. I had as well statistical diagrams about the runs, containing the speed,
              consumption and other data.
            </li>
          </ul>
          <p class="has-text-weight-bold">Agent system site for chat applications</p>
          <ul>
            <li><i>Backend:</i> ExpressJS (NodeJS) - MongoDB - Smooch - Google Cloud Platform Services</li>
            <li><i>Frontend:</i> Vue.js - Vuetify (Material Desing)</li>
            <li>
              At the backend I developed a controller in NodeJS. In that controller I used Translate, Vision,
              Language API from GCP, Dialogflow as NLP service and Smooch as social media connector. At the
              frontend I took Vue.js with Vuetify to create a nice and modern Material design UI.
            </li>
            <li>
              Our goal with this website was to make the work of the customer service easier. The questions coming
              from the customers was automatically answered by a bot, on the other hand one can also be forwarded
              to an "Agent". The agent saw the sentiment scores in the system and could take over the conversation
              from the bot. Among more features there was also statistics provided.
            </li>
          </ul>
        </div>
      </div>
    </b-collapse>
</template>

<script>
export default {
  name: 'MainProjects',
  data () {
    return {
    }
  }
}
</script>

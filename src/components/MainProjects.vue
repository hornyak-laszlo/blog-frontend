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
              This was an exclusively frontend project. We got the data from a REST API provided by another
              company. We used the (at this time) newest stable AngularJS 1.5 with the new ES6 syntax. We used
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

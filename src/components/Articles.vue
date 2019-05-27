<template>
  <div>
    <h1 class="title">Articles</h1>
    <h2 class="subtitle">I am listing here the articles which I found really useful</h2>
    <b-tabs type="is-toggle is-fullwidth">
      <b-tab-item v-for="articleByCategory in articles" :key="articleByCategory.id">
        <template slot="header">
          <b-icon :icon="articleByCategory.icon"></b-icon>
          <span> {{articleByCategory.name}} <b-tag rounded> {{articleByCategory.list.length}} </b-tag> </span>
        </template>
        <div class="box">
          <ul>
            <li v-for="article in articleByCategory.list" :key="article.id">
              <a target="_blank" :href="article.url">{{article.title}}</a>
            </li>
          </ul>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data () {
    return {
      title: 'Articles',
      articles: [
        {
          id: 1,
          name: 'Javascript',
          icon: 'language-javascript',
          list: [
            { id: 1, url: 'https://codeburst.io/things-you-need-to-know-to-become-an-ace-javascript-developer-aa703397268d', title: 'Things you need to know to become an ace Javascript developer' },
            { id: 2, url: 'https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c', title: 'Functional Mixins' },
            { id: 3, url: 'https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale', title: 'JavaScript Clean Coding Best Practices' },
            { id: 4, url: 'https://blog.risingstack.com/node-js-development-tips-2018', title: '8 Tips to Build Better Node.js Apps in 2018' },
            { id: 5, url: 'https://blog.risingstack.com/node-js-security-checklist', title: 'Node.js Security Checklist' },
            { id: 6, url: 'https://blog.risingstack.com/mastering-async-await-in-nodejs', title: 'Mastering Async Await in Node.js' },
            { id: 7, url: 'https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis', title: '10 Best Practices for Writing Node.js REST APIs' },
            { id: 8, url: 'https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea', title: 'Composing Software: An Introduction' },
            { id: 9, url: 'https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c', title: 'The Rise and Fall and Rise of Functional Programming' },
            { id: 10, url: 'https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257', title: 'Why Learn Functional Programming in JavaScript? ' },
            { id: 11, url: 'https://scotch.io/tutorials/a-practical-graphql-getting-started-guide-with-nodejs', title: 'A Practical GraphQL Getting Started Guide with Node.js' },
            { id: 12, url: 'https://scotch.io/courses/build-an-online-shop-with-vue', title: 'Build an Online Shop with Vue' },
            { id: 13, url: 'https://gist.github.com/staltz/868e7e9bc2a7b8c1f754', title: 'The introduction to Reactive Programming you\'ve been missing' },
            { id: 14, url: 'https://codeburst.io/angular-vs-react-vs-vue-f470f5b74bf6', title: 'Angular vs React vs Vue' },
            { id: 15, url: 'https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7', title: 'What is “this” in JavaScript?' }
          ]
        }, {
          id: 2,
          name: 'Functional Programming',
          icon: 'lambda',
          list: [
            { id: 1, url: 'http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html', title: 'Functors, Applicatives, And Monads In Pictures' },
            { id: 2, url: 'https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad', title: 'The Marvellously Mysterious Javascript Maybe Monad' },
            { id: 3, url: 'https://tech.iheart.com/why-fp-its-the-composition-f585d17b01d3', title: 'Why Functional Programming? It’s the composition.' },
            { id: 4, url: 'https://functional.works-hub.com/learn/Functional-Programming-Jargon', title: 'Functional Programming Jargon' },
            { id: 5, url: 'https://hkupty.github.io/2016/Functional-Programming-Concepts-Idioms-and-Philosophy', title: 'Functional Programming: Concepts, Idioms and Philosophy' },
            { id: 6, url: 'https://functional.works-hub.com/learn/Understanding-the-Math-behind-FP-The-Monads', title: 'Understanding the Math behind FP: The Monads' },
            { id: 7, url: 'https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30', title: 'A Functional Programmer’s Introduction to JavaScript' },
            { id: 8, url: 'https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8', title: 'Javascript Monads Made Simple' },
            { id: 9, url: 'https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99', title: 'Higher Order Functions' },
            { id: 10, url: 'https://medium.freecodecamp.org/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276', title: 'Functional Programming In JavaScript With Practical Examples (Part 1)' },
            { id: 11, url: 'https://medium.freecodecamp.org/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e', title: 'Functional Programming In JavaScript With Practical Examples (Part 2)' },
            { id: 12, url: 'https://functional.works-hub.com/learn/the-science-behind-functional-programming-3b060?utm_campaign=Newsletter&utm_source=hs_email&utm_medium=email&utm_content=62090173&_hsenc=p2ANqtz-_cm_1lgULsvbDe_dqKyXG_2v_0cSnsn7TtW31DapXRr5kwRcS3ljOavNVtCSIyAQIu69MCi5MPZxxOuEnq_0gTr65VaB7af447sfz40sJ-C8aQjQE&_hsmi=62090173', title: 'The Science Behind Functional Programming' },
            { id: 13, url: 'https://functional.works-hub.com/learn/demystifying-the-monad-in-scala-cf414?utm_campaign=Newsletter&utm_source=hs_email&utm_medium=email&utm_content=61594389&_hsenc=p2ANqtz-8zg8gyhbu7YMq9mFZjTP0NDdvFdUrF7gZ3UmAS2FxmZ5FCB3H4zTOlEtvY5DgiCx4qPO7tQaRHpAYq2TOLOGGR-xIsHWrS6wcSeEHrXCSdJREjr5A&_hsmi=61594389', title: 'Demystifying the Monad in Scala' },
            { id: 14, url: 'https://snipcart.com/blog/functional-programming-paradigm-concepts', title: 'Concepts behind the Functional Programming Paradigm Explained' }
          ]
        }, {
          id: 3,
          name: 'Data Science / Machine Learning',
          icon: 'chart-bar',
          list: [
            { id: 1, url: 'https://towardsdatascience.com/top-algorithms-and-data-structures-you-really-need-to-know-ab9a2a91c7b5', title: 'Top Algorithms and Data Structures You Really Need To Know' },
            { id: 2, url: 'https://medium.com/machine-learning-for-humans/why-machine-learning-matters-6164faf1df12', title: 'Machine Learning for Humans' },
            { id: 3, url: 'https://towardsdatascience.com/a-beginners-guide-to-the-data-science-pipeline-a4904b2d8ad3', title: 'A Beginner’s Guide to the Data Science Pipeline' },
            { id: 4, url: 'https://towardsdatascience.com/a-tour-of-the-top-10-algorithms-for-machine-learning-newbies-dde4edffae11', title: 'A Tour of The Top 10 Algorithms for Machine Learning Newbies' },
            { id: 5, url: 'https://towardsdatascience.com/introduction-to-machine-learning-db7c668822c4', title: 'Introduction To Machine Learning' },
            { id: 6, url: 'https://towardsdatascience.com/data-science-interview-guide-4ee9f5dc778', title: 'Data Science Interview Guide' },
            { id: 7, url: 'https://medium.com/@srowen/common-probability-distributions-347e6b945ce4', title: 'Common Probability Distributions' },
            { id: 8, url: 'https://towardsdatascience.com/introduction-to-statistics-e9d72d818745', title: 'Data science concepts you need to know!' },
            { id: 9, url: 'https://towardsdatascience.com/data-science-you-need-to-know-a-b-testing-f2f12aff619a', title: 'A/B testing' },
            { id: 10, url: 'htntps://medium.com/cracking-the-data-science-interview/the-10-statistical-techniques-data-scientists-need-to-master-1ef6dbd531f7', title: 'The 10 Statistical Techniques Data Scientists Need to Master' },
            { id: 11, url: 'https://towardsdatascience.com/a-complete-machine-learning-walk-through-in-python-part-one-c62152f39420', title: 'A Complete Machine Learning Project Walk-Through in Python: Part One' },
            { id: 12, url: 'https://towardsdatascience.com/a-complete-machine-learning-project-walk-through-in-python-part-two-300f1f8147e2', title: 'A Complete Machine Learning Project Walk-Through in Python: Part Two' },
            { id: 13, url: 'https://towardsdatascience.com/a-complete-machine-learning-walk-through-in-python-part-three-388834e8804b', title: 'A Complete Machine Learning Project Walk-Through in Python: Part Three' }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

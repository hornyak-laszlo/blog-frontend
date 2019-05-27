<template>
  <div class="card">
    <div class="card-content">
      <p class="has-text-centered has-text-weight-bold subtitle">
        {{name}}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Watch it on <a target="_blank" :href="url" >{{page}}</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    name: String,
    url: String,
    page: String
  }
}
</script>

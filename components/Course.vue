<template>
  <div class="card">
    <div class="card-content">
      <p class="has-text-centered has-text-weight-bold subtitle">
        {{ name }}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Watch it on <a :href="url" class="has-text-info" target="_blank">{{ page }}</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    page: {
      type: String,
      default: ''
    }
  }
}
</script>

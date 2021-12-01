<template>
  <b-collapse class="card">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">
        EDUCATION
      </p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="has-text-weight-bold">
          Business Informatics MSc.
        </p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">
                Budapest University of Technology and Economics (HU)
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">
                September 2011 – June 2013
              </span>
            </div>
          </div>
        </div>
        <p>
          Service Development and Management Department - Service-Oriented Architectures Specialization
        </p>
        <hr>
        <p class="has-text-weight-bold">
          Electrical Engineering BSc.
        </p>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-italic">
                Budapest University of Technology and Economics (HU)
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="is-italic">
                September 2007 – June 2011
              </span>
            </div>
          </div>
        </div>
        <p>
          Embedded Systems Department - Control Systems Specialization
        </p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'EducationItem',
  data () {
    return {
    }
  }
}
</script>

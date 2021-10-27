<template>
  <div class="flex container-narrow nav">
    <a class="logo-css"  href="/" target="_blank">
      123 Game
    </a>
    <div class="btn" @click.prevent="reload">New Game</div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    reload() {
      window.location.reload(true)
    }
  }
}
</script>

<style>
.nav {
  position: relative;
  padding: .5rem 1rem;
  margin-top: calc(var(--space) * 2);
  margin-bottom: calc(var(--space) * 2);
}

.logo-css {
  display: inline-block;
  font-weight: 700;
  padding: .3rem 0 ;
  font-size: 1.25rem;
  margin-right: 1.25rem;
}
</style>

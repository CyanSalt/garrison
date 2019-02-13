<template>
  <div id="main">
  </div>
</template>

<script>
export default {
  el: '#main',
  async beforeCreate() {
    // custom stylesheet
    const stylesheet = await this.$storage.read('custom.css')
    if (stylesheet) {
      const element = document.createElement('style')
      element.appendChild(document.createTextNode(stylesheet))
      document.head.appendChild(element)
    }
  },
  created() {
    // custom script
    const initScript = this.$storage.require('custom.js')
    initScript && initScript(this)
  },
}
</script>

<style>
#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

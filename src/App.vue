<template>
  <div class="app">

  <Slider :conf="{controls: false}">
      <Slide>
            <img src="https://via.placeholder.com/800x300" >
            <div>lorem ipsum 1</div>
      </Slide>
      <Slide>
            <img src="https://via.placeholder.com/800x300" >
            <div>lorem ipsum 2</div>
      </Slide>
      <Slide>
            <img src="https://via.placeholder.com/800x300" >
            <div>lorem ipsum 3</div>
      </Slide>
      <Slide>
            <img src="https://via.placeholder.com/800x300" >
            <div>lorem ipsum 4</div>
      </Slide>
  </Slider>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="stylus">
@import '../node_modules/normalize.css/normalize.css'

*
  box-sizing border-box

.app
  max-width 800px
  width 100%
  margin 0 auto

</style>
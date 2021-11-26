<template>
  <div ref="slider" class="sip_slider">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    conf: Object,
  },
  mounted() {
    let config = {
        container: this.$refs.slider,
        items: 1,
        slideBy: 'page',
        loop: false,
        controls: true, // false - disable arrow btns (left/right)
        nav: true, // false - disable dots
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto', // исправляет ошибку "Unable to preventDefault inside passive event listener invocation"
        autoplay: false,
    };
    config.onInit = () => {
      this.$refs.slider.style.display = 'block'
    };

    config = {...config, ...this.conf}

    setTimeout(() => {
      let slider = this.$tns(config);
      slider.events.on('indexChanged', ()=>{
        this.index = slider.getInfo().navCurrentIndex
      });

    }, 0);
  }
}
</script>
<style lang="stylus">

.sip_slider_item
  position relative
  display inline-table
  img
    width 100%
.sip_slide
  position relative
.tns-outer
  position relative
  // кнопки
  .tns-controls
    button
      position absolute
      top 50%
      border none
      width 30px
      height 30px
      background #ddd
      border-radius 50%
      font-size 0
      outline none
      margin-top -15px
      z-index 2
      &:before, &:after
        content ''
        position absolute
        top 19px
        left 8px
        width 12px
        height 1px
        background #114B69
      &:before
        transform rotate(45deg)
      &:after
        transform rotate(-45deg)
        top 10px
    [data-controls="prev"]
      left 20px
      transform  translateY(-50%)
    [data-controls="next"]
      right 20px
      transform  translateY(-50%) rotate(180deg)
  // dots
  .tns-nav
    display flex
    justify-content center
    position relative
    z-index 2
    button
      width 10px
      height 10px
      border-radius 50%
      margin 0 5px
      padding 0
      background #ccc
      outline none
      border none
    .tns-nav-active
      background #000

</style>
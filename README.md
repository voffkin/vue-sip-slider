# vue-sip-slider

VueJs wrapper for tiny-slider  
https://github.com/ganlanyuan/tiny-slider  


## Project setup
```
npm i https://github.com/voffkin/vue-sip-slider.git
```

main.js
```
import { Slider, Slide } from 'vue-sip-slider';
import {tns}  from "../node_modules/tiny-slider/src/tiny-slider"
import '../node_modules/tiny-slider/dist/tiny-slider.css'

Vue.prototype.$tns = tns;

Vue.component('Slider', Slider);
Vue.component('Slide', Slide);
```

App.vue
```vue
<Slider :conf="{controls: false}" >
    <Slide>
        <img src="" >
        <div>lorem ipsum</div>
    </Slide>
    <Slide>
        <img src="" >
        <div>lorem ipsum</div>
    </Slide>
</Slider>
```

All ddd options tiny-slider can be used in conf props of Slider 
https://github.com/ganlanyuan/tiny-slider#options  

controls - arrow buttons (left/right)  
nav - dotted  

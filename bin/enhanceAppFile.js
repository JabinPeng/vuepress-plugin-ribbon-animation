import Ribbon from "./Ribbon.vue";
import RibbonAnimation from './RibbonAnimation.vue'
export default ({
  Vue
}) => {
  Vue.component(Ribbon.name, Ribbon);
  Vue.component(RibbonAnimation.name, RibbonAnimation);
};

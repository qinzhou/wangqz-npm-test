import Icon from './icon';
import Pagination from './pagination';
import Css from './css';
const components = [
	Icon,
	Pagination,
  Css
];


const ui = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    components.map(component => {
        Vue.component(component.name, component);
     });
  }
}

export default ui;
import Vue from 'vue'
import Router from 'vue-router'

import demo from '@/demo/demo.vue';

import icon from '@/demo/icon.vue';
import pagination from '@/demo/pagination.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: demo,
      children : [
      	{
	      	path : '',
	      	component : pagination
      	},
      	{
	      	path : 'pagination',
	      	component : pagination
      	},
      	{
	      	path : 'icon',
	      	component : icon
      	},
      ]
    }
  ]
})

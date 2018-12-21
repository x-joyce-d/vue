import Vue from 'vue'
import Router from 'vue-router'
import Prop from '@/components/prop'
import Test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/prop",
      name:"prop",
      component:Prop
    },
    {
      path:"/test",
      name:"test",
      component:Test
    }
  ]
})

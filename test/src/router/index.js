import Vue from 'vue'
import Router from 'vue-router'
import ButtonCounter from '@/components/ButtonCounter'
import Index from '@/components/index'
import BlogPost from '@/components/BlogPost'
import CustomInput from '@/components/CustomInput'
import Table from '@/components/table'
import Nav from '@/components/nav'
import Upload from '@/components/upload'
import DateTime from '@/components/DateTime'
import Slot from '@/components/slot'
import Prop from '@/components/prop'
import Test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'ButtonCounter',
      component:ButtonCounter
    },
    {
      path:"/index",
      name:'index',
      component:Index
    },
    {
      path:"/BlogPost",
      name:"BlogPost",
      component:BlogPost
    },
    {
      path:"/custom",
      name:"CustomInput",
      component:CustomInput
    },
    {
      path:"/table",
      name:"table",
      component:Table
    },
    {
      path:"/nav",
      name:"nav",
      component:Nav
    },
    {
      path:"/upload",
      name:"upload",
      component:Upload
    },
    {
      path:"/datetime",
      name:"DateTime",
      component:DateTime
    },
    {
      path:"/slot",
      name:"slot",
      component:Slot
    },
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

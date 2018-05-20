import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Registration from '@/components/Registration'
import FiltersDemo from '@/components/FiltersDemo'
import DynamicComponent from '@/components/DynamicComponent'
import CallParentMethodFromChild from '@/components/CallParentMethodFromChild'

Vue.use(Router)
Vue.filter('capitalizeGlobal', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'FiltersDemo',
      component: FiltersDemo
    },
    {
      path: '/parentDemo',
      name: 'CallParentMethodFromChild',
      component: CallParentMethodFromChild
    },
    {
      path: '/dynamicComponent',
      name: 'DynamicComponent',
      component: DynamicComponent
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})

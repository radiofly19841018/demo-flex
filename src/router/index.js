import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import page4 from '@/components/page4'
import page5 from '@/components/page5'
import page6 from '@/components/page6'
import page7 from '@/components/page7'
import page8 from '@/components/page8'
import page9 from '@/components/page9'
import page10 from '@/components/page10'
import page11 from '@/components/page11'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'page1',
      path: '/',
      component: page1
    },
    {
      name: 'page2',
      path: '/page2',
      component: page2
    },
    {
      name: 'page3',
      path: '/page3',
      component: page3
    },
    {
      name: 'page4',
      path: '/page4',
      component: page4
    },
    {
      name: 'page5',
      path: '/page5',
      component: page5
    },
    {
      name: 'page6',
      path: '/page6',
      component: page6
    },
    {
      name: 'page7',
      path: '/page7',
      component: page7
    },
    {
      name: 'page8',
      path: '/page8',
      component: page8
    },
    {
      name: 'page9',
      path: '/page9',
      component: page9
    },
    {
      name: 'page10',
      path: '/page10',
      component: page10
    },
    {
      name: 'page11',
      path: '/page11',
      component: page11
    }
  ]
})

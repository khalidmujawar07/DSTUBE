import {createRouter,createWebHistory} from 'vue-router'
import View from './components/View/View.vue'
import card  from './components/Home/card.vue'
import Profile from './components/Profile/Profile.vue'


const routes=[
    {
        name:'card',
        component:card,
        path:'/card'
    },
    {
        name:'View',
        component:View,
        path:'/view'
    },
    {
        name:'Profile',
        component:Profile,
        path:'/profile'
    }
    
]

const  router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
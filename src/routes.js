import {createRouter,createWebHistory} from 'vue-router'
import View from './components/View/View.vue'
import card  from './components/Home/card.vue'
import Profile from './components/Profile/Profile.vue'
import RecentView from './components/View/RecentView.vue'

const routes=[
    {
        name:'card',
        component:card,
        path:'/'
    },
    {
        name:'View',
        component:View,
        path:'/view/:id'
    },
    {
        name:'Profile',
        component:Profile,
        path:'/profile'
    },
    {
        name:'RecentView',
        component:RecentView,
        path:'/recent'
    }
    
]

const  router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
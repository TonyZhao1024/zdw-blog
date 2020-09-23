import Vue from "vue";
import VueRouter from 'vue-router';
import StringUtilsComp from '../components/detaiVue/StringUtilsComp'
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter)


//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/StringUtilsComp',
            name: 'StringUtilsComp',
            component: StringUtilsComp
        }
    ]
})

export default router
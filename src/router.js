import { createWebHistory, createRouter } from 'vue-router';
import index from './components/index.vue';
import storeDetail from './components/storeDetail.vue';
import listcontent from './components/listpage-containter.vue';
import listcontent1 from './components/listcontent1.vue';
import listcontent2 from './components/listcontent2.vue';
import listcontent3 from './components/listcontent3.vue';
import searchResult from './components/searchResult.vue';
import contactUs from './components/contactUs.vue';
import IdFindModal from './components/IdFindModal.vue';
import LoginForm from './components/LoginForm.vue';
import Userjoin from './components/UserJoin.vue';
import UserPage from './components/UserPage.vue';
import admin from './components/admin.vue';

const routes = [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/storeDetail/:id',
            name: 'storeDetail',
            component: storeDetail
        },
        {
            path: '/searchResult',
            name: 'searchResult',
            component: searchResult,
            children: [
                {
                    path: "listpage", //접속경로. 작명
                    name: "listcontent",
                    component: listcontent,
                    children: [
                        {
                            path: "listcontent1", //접속경로. 작명
                            name: "listcontent1",
                            component: listcontent1,
                        },
                        {
                            path: "listcontent2", //접속경로. 작명
                            name: "listcontent2",
                            component: listcontent2,
                        },
                        {
                            path: "listcontent3", //접속경로. 작명
                            name: "listcontent3",
                            component: listcontent3,
                        }
                    ]
                }
            ]
        },
        {
            path: "/contactUs",
            name: "contactUs",
            component: contactUs
        },
        {
            path: "/IdFindModal",
            name: "IdFindModal",
            component: IdFindModal
        },
        {
            path: "/LoginForm",
            name: "LoginForm",
            component: LoginForm
        },
        {
            path: "/Userjoin",
            name: "Userjoin",
            component: Userjoin
        },
        {
            path: "/UserPage",
            name: "UserPage",
            component: UserPage
        },
        {
            path: "/admin",
            name: "admin",
            component: admin 
        }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 항상 맨 위로 스크롤
        return { top: 0 }
    }
})

export default router;
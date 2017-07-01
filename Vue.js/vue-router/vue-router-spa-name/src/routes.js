
// load components
import Home from './components/Home.vue';
import User from './components/User/User.vue';
import UserStart from './components/User/UserStart.vue';
import UserDetail from './components/User/UserDetail.vue';
import UserEdit from './components/User/UserEdit.vue';

// Router Settiong
export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
];
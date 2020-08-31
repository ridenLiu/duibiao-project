import Login from '@/views/login/Login'
import Home from '@/views/home/Home'

const routes = [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/home',
            name: 'Home',
            component: Home
        }

    ]
;

export default routes;

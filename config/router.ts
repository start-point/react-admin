export default [
    {
        path: '/user/login',
        exact: true,
        layout: false,
        routes: [
            {
                path: '/user/login',
                routes: [
                    {
                        name: 'login',
                        path: '/user/login',
                        component: './user/login',
                    },
                ],
            },
            {
                component: '@/pages/Access_Error/404',
            }
        ],
    },
    {
        name: '首页',
        path: '/home',
        component: '@/pages/Home',
        icon: 'home',
    },
    {
        name: '个人资料',
        path: '/personal',
        component: '@/pages/Personal',
        icon: 'TeamOutlined',
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        component: '@/pages/Access_Error/404',
    }
]
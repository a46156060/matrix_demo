import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Testroot',
      path: '/',
      component: () => import('@/views/Testroot'),
      children: [
        {
          name: 'Auth',
          path: 'auth',
          component: () => import('@/views/Auth')
        },
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/Dashboard')
        },
        {
          name: 'Alarms',
          path: 'alarms',
          component: () => import('@/views/Alarms')
        },
        {
          name: 'Reports',
          path: 'reports',
          component: () => import('@/views/Reports')
        },
        {
          path: 'pictures',
          component: () => import('@/views/Pictures'),
          children: [
            {
              name: 'PicturesHome',
              path: '',
              component: () => import('@/views/PicturesHome')
            },
            {
              name: 'Picture',
              path: ':id',
              component: () => import('@/views/Picture'),
              children: [
                {
                  name: 'Insects',
                  path: 'insects',
                  component: () => import('@/views/Insects')
                }
              ]
            },
            {
              name: 'PicturesManage',
              path: ':id/edit',
              component: () => import('@/views/PicturesManage')
            }
          ]
        },
        {
          path: 'picturesManagement',
          component: () => import('@/views/PicturesManagement'),
          children: [
            {
              name: 'PicManageDetail',
              path: ':id',
              component: () => import('@/views/PicManageDetail')
            },
            {
              name: 'PicManageEdit',
              path: ':id/edit',
              component: () => import('@/views/PicManageEdit')
            },
            {
              name: 'PicturesManagementHome',
              path: '',
              component: () => import('@/views/PicturesManagementHome')
            }
          ]
        },
        {
          name: 'Profile',
          path: 'profiles',
          component: () => import('@/views/Profile')
        },
        {
          name: 'Apps',
          path: 'apps',
          component: () => import('@/views/Apps')
        },
        {
          path: 'apps/status',
          component: () => import('@/views/AppStatus'),
          children: [
            {
              name: 'AppStatusHome',
              path: '',
              component: () => import('@/views/AppStatusHome')
            },
            {
              name: 'AppStatusDetail',
              path: ':companyId/:id',
              component: () => import('@/views/AppStatusDetail')
            }
          ]
        },
        {
          name: 'Logs',
          path: 'logs',
          component: () => import('@/views/Logs')
        },
        {
          name: 'ActionLogs',
          path: 'action-logs',
          component: () => import('@/views/ActionLogs')
        },
        {
          name: 'Users',
          path: 'users',
          component: () => import('@/views/Users')
        },
        {
          name: 'Admin',
          path: 'admin',
          component: () => import('@/views/Admin')
        },
        {
          name: 'Sms',
          path: 'sms',
          component: () => import('@/views/Sms')
        },
        {
          name: 'Error',
          path: ':state',
          component: () => import('@/views/Error')
        }
      ]
    }
  ]
})

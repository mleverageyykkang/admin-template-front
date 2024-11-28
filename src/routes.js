import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const List = React.lazy(() => import('./views/List/List'))
const Charge = React.lazy(() => import('./views/Charge/Charge'))

const routes = [
  // Home 이랑 Dashboard 합치기?
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/list', name: 'Account List', element: List },
  { path: '/charge', name: 'Charge', element: Charge },
]

export default routes

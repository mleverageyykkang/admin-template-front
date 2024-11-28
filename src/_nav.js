import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBoltCircle, cilList, cilSpeedometer, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: '메인', //dashboard
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '계정 리스트', //dashboard
    to: '/list',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '입금 및 충전', //dashboard
    to: '/charge',
    icon: <CIcon icon={cilBoltCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '페이지',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '로그인',
        to: '/login',
      },
      {
        component: CNavItem,
        name: '비밀번호 재설정',
        to: '/reset',
      },
      {
        component: CNavItem,
        name: '회원가입',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav

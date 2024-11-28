import React, { useState } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CiLogin, CiLogout } from 'react-icons/ci'

const AppHeaderDropdown = () => {
  const [isLogin, setIsLogin] = useState(false)
  //Login 상태변경 함수 setIsLogin 만들기
  return (
    <CDropdown variant="nav-item" className="d-flex align-items-center">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CIcon icon={cilUser} size="lg" className="me-2" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">User</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        {isLogin ? (
          <CDropdownItem href="/">
            <CiLogout className="me-2" />
            Logout
          </CDropdownItem>
        ) : (
          <CDropdownItem href="/#/login">
            <CiLogin className="me-2" />
            Login
          </CDropdownItem>
        )}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown

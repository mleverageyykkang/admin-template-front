import React from 'react'
import classNames from 'classnames'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const List = () => {
  const tableExample = [
    {
      user: {
        name: '김강민',
        title: '실장',
        code: 2,
      },
      advertiser: {
        name: '제이노블',
        leader: '김명찬',
        rrn: '99999-1111111',
        phone: '010-6789-6740',
        businessNum: '739-86-00096',
        address: '서울특별시 강남구 압구정로30길 9, 4층(신사동)',
        type: '서비스업',
        item: '결혼정보',
        email: 'bricktop@naver.com',
        userEmail: '15-11991@mleverage.co.kr',
      },
      importance: { monthSpending: 60000000, degree: 5 },
      manageInfo: {
        transferDate: '24/03/25 월',
        tax: '직접발행 or 위임',
        payback: 0.0,
        note: '-',
      },
      leaved: {
        transferedDate: '24/04/25 목',
        reason: '성과저조',
      },
      naver: {
        id: 'jnoble1',
        pw: 'noblenoble9345!!!',
      },
      naverGFA: {
        id: 'jnoble3',
        pw: 'Noble9345@!',
        accountNo: 1200305,
      },
      Kakao: {
        id: 'remarier@naver.com',
        pw: 'j15889345@',
        no: 482324,
        momentNo: 130801,
      },
      google: {
        id: '-',
        pw: '-',
      },
    },
  ]
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader> 메인 테이블 </CCardHeader>
        <CCardBody>
          <CTable
            align="middle"
            className="mb-0 border table-bordered text-center"
            hover
            responsive
          >
            <CTableHead className="text-nowrap text-center">
              <CTableRow className="bg-body-tertiary">
                <CTableHeaderCell colSpan={3} className="bg-body-tertiary">
                  담당자 정보
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={12} className="bg-body-tertiary">
                  광고주 정보
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={2} className="bg-body-tertiary">
                  중요도
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={4} className="bg-body-tertiary">
                  관리정보
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={2} className="bg-body-tertiary">
                  이탈 시
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={1} className="bg-body-tertiary">
                  홈페이지
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={2} className="bg-body-tertiary">
                  네이버
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={3} className="bg-body-tertiary">
                  네이버 GFA
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={4} className="bg-body-tertiary">
                  카카오/카카오모먼트
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={2} className="bg-body-tertiary">
                  구글
                </CTableHeaderCell>
                <CTableHeaderCell colSpan={2} className="bg-body-tertiary">
                  기타
                </CTableHeaderCell>
              </CTableRow>
              <CTableRow>
                {/* 담당자 정보 */}
                <CTableHeaderCell scope="col" className="bg-body-tertiary">
                  성함
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="bg-body-tertiary">
                  직급
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="bg-body-tertiary">
                  코드
                </CTableHeaderCell>

                {/* 광고주 정보 */}
                <CTableHeaderCell className="bg-body-tertiary">업체명</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">대표자명</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">
                  주민등록번호(신분증)
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">담당자명(주 소통)</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">연락처(담당자)</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">
                  사업자등록증(업체명)
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">사업자등록번호</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">사업장주소</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">업태</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">종목</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">업체 이메일</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">
                  마케팅레버리지 담당자 이메일
                </CTableHeaderCell>

                {/* 중요도 */}
                <CTableHeaderCell className="bg-body-tertiary">월 스펜딩(10단위)</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">점수: 1~5</CTableHeaderCell>

                {/* 관리정보 */}
                <CTableHeaderCell className="bg-body-tertiary">이관일자</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">
                  세금계산서 발행정보
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">페이백(요율%)</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비고</CTableHeaderCell>

                {/* 이탈 시 */}
                <CTableHeaderCell className="bg-body-tertiary">피이관일자</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">사유</CTableHeaderCell>

                {/* 홈페이지 */}
                <CTableHeaderCell className="bg-body-tertiary"></CTableHeaderCell>

                {/* 네이버 */}
                <CTableHeaderCell className="bg-body-tertiary">아이디</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비밀번호</CTableHeaderCell>

                {/* 네이버 GFA */}
                <CTableHeaderCell className="bg-body-tertiary">아이디</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비밀번호</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">광고계정번호</CTableHeaderCell>

                {/* 카카오/카카오모먼트 */}
                <CTableHeaderCell className="bg-body-tertiary">아이디</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비밀번호</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">카카오번호</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">모먼트번호</CTableHeaderCell>

                {/* 구글 */}
                <CTableHeaderCell className="bg-body-tertiary">아이디</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비밀번호</CTableHeaderCell>

                {/* 기타 */}
                <CTableHeaderCell className="bg-body-tertiary">아이디</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">비밀번호</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell>
                    <div className="text-nowrap">{item.user.name}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item.user.title}</CTableDataCell>
                  <CTableDataCell>{item.user.code}</CTableDataCell>
                  <CTableDataCell>
                    <div className=" text-nowrap">{item.advertiser.name}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item.advertiser.leader}</CTableDataCell>
                  <CTableDataCell>{item.advertiser.rrn}</CTableDataCell>
                  <CTableDataCell>{item.advertiser.managerName}</CTableDataCell>
                  <CTableDataCell>
                    <div className=" text-nowrap">{item.advertiser.phone}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item.advertiser.certificate}</CTableDataCell>
                  <CTableDataCell>{item.advertiser.TIN}</CTableDataCell>
                  <CTableDataCell>
                    <div className="text-nowrap">{item.advertiser.address}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className=" text-nowrap">{item.advertiser.type}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className=" text-nowrap">{item.advertiser.item}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item.advertiser.email}</CTableDataCell>
                  <CTableDataCell>{item.advertiser.userEmail}</CTableDataCell>
                  <CTableDataCell>{item.importance.monthSpending}</CTableDataCell>
                  <CTableDataCell>{item.importance.degree}</CTableDataCell>
                  <CTableDataCell>
                    <div className="text-nowrap">{item.manageInfo.transferDate}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item.manageInfo.tax}</CTableDataCell>
                  <CTableDataCell>{item.manageInfo.payback}</CTableDataCell>
                  <CTableDataCell>{item.manageInfo.note}</CTableDataCell>
                  <CTableDataCell>
                    <div className="text-nowrap">{item.leaved.transferedDate}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="text-nowrap">{item.leaved.reason}</div>
                  </CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell>{item.naver.id}</CTableDataCell>
                  <CTableDataCell>{item.naver.pw}</CTableDataCell>
                  <CTableDataCell>{item.naverGFA.id}</CTableDataCell>
                  <CTableDataCell>{item.naverGFA.pw}</CTableDataCell>
                  <CTableDataCell>{item.naverGFA.accountNo}</CTableDataCell>
                  <CTableDataCell>{item.Kakao.id}</CTableDataCell>
                  <CTableDataCell>{item.Kakao.pw}</CTableDataCell>
                  <CTableDataCell>{item.Kakao.no}</CTableDataCell>
                  <CTableDataCell>{item.Kakao.momentNo}</CTableDataCell>
                  <CTableDataCell>{item.google.id}</CTableDataCell>
                  <CTableDataCell>{item.google.pw}</CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default List

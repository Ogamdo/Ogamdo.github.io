
import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'
  }, [darkMode])

  const navigation = [
    { id: 'home', name: '홈', label: 'Home' },
    { id: 'about', name: '회사소개', label: 'About' },
    { id: 'business', name: '사업영역', label: 'Business' },
    { id: 'products', name: '제품/솔루션', label: 'Products' },
    { id: 'partners', name: '파트너', label: 'Partners' },
    { id: 'support', name: '고객지원', label: 'Support' },
    { id: 'cases', name: '고객사례', label: 'Cases' }
  ]

  const Header = () => (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>2Bcomtech</h1>
            <span>투비컴텍</span>
          </div>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setMobileMenuOpen(false)
                }}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <div className="contact-info">
              <span>📞 02-714-0633</span>
            </div>
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  )

  const HomePage = () => (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>고객의 행복을 추구하는 디지털 리더십</h1>
            <p>1995년부터 IT 제품 및 솔루션을 제공하는 신뢰할 수 있는 파트너</p>
            <button className="cta-button" onClick={() => setCurrentPage('support')}>
              견적 문의하기
            </button>
          </div>
        </div>
      </section>

      <section className="products-overview">
        <div className="container">
          <h2>주요 제품 카테고리</h2>
          <div className="product-cards">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>전산장비</h3>
              <p>PC, 서버, 프린터, 스토리지 등</p>
            </div>
            <div className="card">
              <div className="card-icon">🖨️</div>
              <h3>전산소모품</h3>
              <p>토너, 잉크, 드럼, 리본 등</p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>정보보안 솔루션</h3>
              <p>DB 암호화, 랜섬웨어 방어, EDR 등</p>
            </div>
            <div className="card">
              <div className="card-icon">🚨</div>
              <h3>재난안전</h3>
              <p>안전관리시스템, 화재대피용품 등</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-slider">
        <div className="container">
          <h2>파트너사</h2>
          <div className="partners-logos">
            <div className="partner-logo">SK브로드밴드</div>
            <div className="partner-logo">삼성전자</div>
            <div className="partner-logo">HP</div>
            <div className="partner-logo">렉스마크</div>
            <div className="partner-logo">캐논</div>
            <div className="partner-logo">후지제록스</div>
          </div>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="page">
      <section className="about-hero">
        <div className="container">
          <h1>회사소개</h1>
          <p>1995년 설립 이래 고객의 성공을 위한 IT 솔루션을 제공합니다</p>
        </div>
      </section>

      <section className="company-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>회사 개요</h3>
              <ul>
                <li>설립년도: 1995년</li>
                <li>업종: IT 제품 및 솔루션 공급</li>
                <li>위치: 서울시 영등포구</li>
                <li>전화: 02-714-0633</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>핵심 가치</h3>
              <ul>
                <li>SERVICE LEVEL AGREEMENT</li>
                <li>RESEARCH & DEVELOP</li>
                <li>CUSTOMER'S EXPERIENCE</li>
                <li>SOLUTION PROVIDE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const BusinessPage = () => (
    <div className="page">
      <section className="business-hero">
        <div className="container">
          <h1>사업영역</h1>
          <p>다양한 IT 분야에서 전문적인 서비스를 제공합니다</p>
        </div>
      </section>

      <section className="business-areas">
        <div className="container">
          <div className="business-grid">
            <div className="business-card">
              <h3>전산장비 판매 및 유지보수</h3>
              <p>기업용 PC, 서버, 네트워크 장비의 판매와 전문적인 유지보수 서비스</p>
            </div>
            <div className="business-card">
              <h3>전산소모품</h3>
              <p>프린터 토너, 잉크, 드럼, 리본 등 다양한 전산소모품 공급</p>
            </div>
            <div className="business-card">
              <h3>정보보안 솔루션</h3>
              <p>DB 암호화, 랜섬웨어 방어, EDR 등 종합적인 보안 솔루션</p>
            </div>
            <div className="business-card">
              <h3>재난안전 및 사무용품</h3>
              <p>안전관리시스템, 화재대피용품, 각종 사무용품 공급</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const ProductsPage = () => (
    <div className="page">
      <section className="products-hero">
        <div className="container">
          <h1>제품/솔루션</h1>
          <p>고품질의 IT 제품과 솔루션을 제공합니다</p>
        </div>
      </section>

      <section className="products-detail">
        <div className="container">
          <div className="product-categories">
            <div className="category">
              <h3>전산장비</h3>
              <ul>
                <li>데스크톱 PC</li>
                <li>노트북</li>
                <li>서버</li>
                <li>프린터</li>
                <li>스토리지</li>
                <li>네트워크 장비</li>
              </ul>
            </div>
            <div className="category">
              <h3>전산소모품</h3>
              <ul>
                <li>프린터 토너</li>
                <li>잉크 카트리지</li>
                <li>드럼 유닛</li>
                <li>리본 카트리지</li>
                <li>용지</li>
                <li>기타 소모품</li>
              </ul>
            </div>
            <div className="category">
              <h3>정보보안 솔루션</h3>
              <ul>
                <li>DB 암호화</li>
                <li>랜섬웨어 방어</li>
                <li>EDR (Endpoint Detection and Response)</li>
                <li>네트워크 보안</li>
                <li>접근 제어</li>
                <li>보안 컨설팅</li>
              </ul>
            </div>
            <div className="category">
              <h3>재난안전 제품</h3>
              <ul>
                <li>안전관리시스템</li>
                <li>화재대피용품</li>
                <li>비상장비</li>
                <li>안전교육 자료</li>
                <li>응급처치용품</li>
                <li>안전점검 도구</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const PartnersPage = () => (
    <div className="page">
      <section className="partners-hero">
        <div className="container">
          <h1>파트너</h1>
          <p>글로벌 리더들과 함께합니다</p>
        </div>
      </section>

      <section className="partners-detail">
        <div className="container">
          <div className="partners-grid">
            <div className="partner-card">
              <h3>SK브로드밴드</h3>
              <p>통신 및 네트워크 솔루션</p>
            </div>
            <div className="partner-card">
              <h3>삼성전자</h3>
              <p>전자제품 및 반도체</p>
            </div>
            <div className="partner-card">
              <h3>HP</h3>
              <p>프린터 및 PC 솔루션</p>
            </div>
            <div className="partner-card">
              <h3>렉스마크</h3>
              <p>프린터 및 이미징 솔루션</p>
            </div>
            <div className="partner-card">
              <h3>캐논</h3>
              <p>이미징 및 프린팅 솔루션</p>
            </div>
            <div className="partner-card">
              <h3>후지제록스</h3>
              <p>문서 관리 솔루션</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const SupportPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      alert('견적 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }

    return (
      <div className="page">
        <section className="support-hero">
          <div className="container">
            <h1>고객지원</h1>
            <p>언제든지 문의해 주세요</p>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>연락처 정보</h3>
                <div className="contact-item">
                  <strong>전화:</strong> 02-714-0633
                </div>
                <div className="contact-item">
                  <strong>주소:</strong> 서울시 영등포구
                </div>
                <div className="contact-item">
                  <strong>이메일:</strong> info@2bcomtech.co.kr
                </div>
                <div className="contact-item">
                  <strong>운영시간:</strong> 평일 09:00 - 18:00
                </div>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>견적 문의</h3>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="성명"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="회사명"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="연락처"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="문의 제목"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="문의 내용"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">문의하기</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const CasesPage = () => (
    <div className="page">
      <section className="cases-hero">
        <div className="container">
          <h1>고객사례</h1>
          <p>다양한 분야의 고객들과 함께한 성공 사례</p>
        </div>
      </section>

      <section className="cases-detail">
        <div className="container">
          <div className="cases-grid">
            <div className="case-card">
              <h3>의료 분야</h3>
              <ul>
                <li>삼성의료재단</li>
                <li>연세의료원</li>
                <li>서울대치과병원</li>
              </ul>
              <p>의료기관의 IT 인프라 구축 및 정보보안 솔루션 제공</p>
            </div>
            <div className="case-card">
              <h3>금융 분야</h3>
              <ul>
                <li>국민은행</li>
                <li>코스콤</li>
              </ul>
              <p>금융권 보안 솔루션 및 전산장비 공급</p>
            </div>
            <div className="case-card">
              <h3>기업 분야</h3>
              <ul>
                <li>대기업 계열사</li>
                <li>중견기업</li>
                <li>중소기업</li>
              </ul>
              <p>다양한 규모의 기업에 맞춤형 IT 솔루션 제공</p>
            </div>
            <div className="case-card">
              <h3>공공기관</h3>
              <ul>
                <li>정부기관</li>
                <li>지자체</li>
                <li>공기업</li>
              </ul>
              <p>공공부문 IT 인프라 및 보안 솔루션 구축</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>투비컴텍 (2Bcomtech)</h3>
            <p>고객의 행복을 추구하는 디지털 리더십</p>
            <p>서울시 영등포구</p>
            <p>전화: 02-714-0633</p>
          </div>
          <div className="footer-section">
            <h4>사업영역</h4>
            <ul>
              <li>전산장비 판매 및 유지보수</li>
              <li>전산소모품</li>
              <li>정보보안 솔루션</li>
              <li>재난안전 및 사무용품</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>고객지원</h4>
            <ul>
              <li>견적 문의</li>
              <li>기술지원</li>
              <li>A/S 신청</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>정책</h4>
            <ul>
              <li>개인정보처리방침</li>
              <li>이용약관</li>
              <li>사이트맵</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 투비컴텍(2Bcomtech). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />
      case 'about': return <AboutPage />
      case 'business': return <BusinessPage />
      case 'products': return <ProductsPage />
      case 'partners': return <PartnersPage />
      case 'support': return <SupportPage />
      case 'cases': return <CasesPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App

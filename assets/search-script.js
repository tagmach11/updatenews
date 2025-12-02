// Search functionality for article pages
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const articleContentWrapper = document.getElementById('article-content-wrapper');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsGrid = document.getElementById('search-results-grid');
    const searchResultsTitle = document.getElementById('search-results-title');
    
    // 경로 확인 (뉴스룸 아티클인지 업데이트 아티클인지)
    const isNewsroomArticle = window.location.pathname.includes('newsroom-articles');
    const basePath = isNewsroomArticle ? '../' : '../';
    
    // 뉴스룸 아티클 데이터
    const newsroomArticles = [
        {
            title: '신SW상품대상 멀티미디어&서비스SW 부문 수상',
            description: '과학기술정보통신부 주최, 전자신문 주관 \'2025년 6월 신SW상품대상\' 멀티미디어&서비스SW 부문 수상. AI 기반 맞춤형 학습관리시스템으로 교육 프로세스 일원화를 실현했습니다.',
            date: '2025년 6월',
            category: '수상',
            image: basePath + 'assets/newsroom/sw-award.png',
            link: isNewsroomArticle ? 'article-sw-competition.html' : 'newsroom-articles/article-sw-competition.html',
            searchText: '신SW상품대상 멀티미디어 서비스SW 부문 수상 과학기술정보통신부 전자신문 2025년 6월 AI 기반 맞춤형 학습관리시스템 교육 프로세스 일원화'
        },
        {
            title: 'AI 다국어 학생 상담 기능',
            description: 'AI 기반 다국어 학생 상담 기능을 제공합니다.',
            date: '2025년 8월 14일',
            category: 'AI 기능',
            image: basePath + 'assets/newsroom/student-counseling.png',
            link: isNewsroomArticle ? 'article-ai-counseling.html' : 'newsroom-articles/article-ai-counseling.html',
            searchText: 'AI 다국어 학생 상담 기능 2025년 8월 14일'
        },
        {
            title: 'GS인증 1등급 획득',
            description: 'GS인증 1등급을 획득했습니다.',
            date: '2025년 9월 12일',
            category: '인증',
            image: basePath + 'assets/newsroom/gs-certification.png',
            link: isNewsroomArticle ? 'article-gs-certification.html' : 'newsroom-articles/article-gs-certification.html',
            searchText: 'GS인증 1등급 획득 인증 2025년 9월 12일'
        },
        {
            title: 'AI 다국어 학습 문의·답변 기능',
            description: 'AI 기반 다국어 학습 문의 및 답변 기능을 제공합니다.',
            date: '2025년 8월 14일',
            category: 'AI 기능',
            image: basePath + 'assets/newsroom/multilingual-qa.png',
            link: isNewsroomArticle ? 'article-ai-multilingual-qa-news.html' : 'newsroom-articles/article-ai-multilingual-qa-news.html',
            searchText: 'AI 다국어 학습 문의 답변 기능 2025년 8월 14일'
        },
        {
            title: '벤처기업혁신상 수상',
            description: '벤처기업혁신상을 수상했습니다.',
            date: '2024년',
            category: '수상',
            image: basePath + 'assets/newsroom/venture-award.png',
            link: isNewsroomArticle ? 'article-sw-award.html' : 'newsroom-articles/article-sw-award.html',
            searchText: '벤처기업혁신상 수상 2024년'
        }
    ];
    
    // 업데이트 정보 데이터
    const updateArticles = [
        {
            title: '강의실 UI/UX 업그레이드',
            description: 'AI 학습지원 · 다크모드 · 보드형 UI',
            date: '',
            category: 'UI/UX',
            image: basePath + 'assets/updateimage/classroom-ui-ux-renewal.png',
            link: isNewsroomArticle ? '../update-articles/article-classroom-renewal.html' : 'article-classroom-renewal.html',
            searchText: '강의실 UI UX 업그레이드 AI 학습지원 다크모드 보드형 UI 디자인 학습환경'
        },
        {
            title: '검색엔진 전면 개편',
            description: '학습데이터 API · OpenSearch 엔진 전환',
            date: '',
            category: '검색',
            image: basePath + 'assets/updateimage/search-engine-renewal.png',
            link: isNewsroomArticle ? '../update-articles/article-data-search-engine.html' : 'article-data-search-engine.html',
            searchText: '검색엔진 전면 개편 학습데이터 API OpenSearch 엔진 전환 데이터 성능개선'
        },
        {
            title: '보안 체계 고도화',
            description: 'KISA 보안약점 · 세션 무결성 · OAuth 인증',
            date: '',
            category: '보안',
            image: basePath + 'assets/updateimage/security-enhancement.png',
            link: isNewsroomArticle ? '../update-articles/article-security-enhancement.html' : 'article-security-enhancement.html',
            searchText: '보안 체계 고도화 KISA 보안약점 세션 무결성 OAuth 인증 안정성'
        },
        {
            title: '사용자 편의성 업데이트',
            description: 'Footer 리뉴얼 · 팝업 최적화 · QR 공유',
            date: '',
            category: 'UX',
            image: basePath + 'assets/updateimage/user-centered-ui-improvement.png',
            link: isNewsroomArticle ? '../update-articles/article-ui-improvement.html' : 'article-ui-improvement.html',
            searchText: '사용자 편의성 업데이트 Footer 리뉴얼 팝업 최적화 QR 공유 UX 접근성 인터페이스'
        },
        {
            title: '기관 맞춤 기능 반영',
            description: '검색 강화 · 수료증 출력 · OTP 인증',
            date: '',
            category: '기능확장',
            image: basePath + 'assets/updateimage/custom-features.png',
            link: isNewsroomArticle ? '../update-articles/article-custom-features.html' : 'article-custom-features.html',
            searchText: '기관 맞춤 기능 반영 검색 강화 수료증 출력 OTP 인증 기능확장 운영관리 기관요구'
        },
        {
            title: '통합검색·홍보영상 기능 강화',
            description: '추천검색 · 영상 팝업 · GLightbox 연동',
            date: '',
            category: '검색',
            image: basePath + 'assets/updateimage/integrated-search-video-enhancement.png',
            link: isNewsroomArticle ? '../update-articles/article-integrated-search.html' : 'article-integrated-search.html',
            searchText: '통합검색 홍보영상 기능 강화 추천검색 영상 팝업 GLightbox 연동 미디어 추천기능'
        },
        {
            title: '암호화 아키텍처 고도화',
            description: 'SHA2/SHA3 · HMAC · CMAC 구현 완료',
            date: '',
            category: '보안',
            image: basePath + 'assets/updateimage/lx2crypto-development-verification.png',
            link: isNewsroomArticle ? '../update-articles/article-lx2crypto-status.html' : 'article-lx2crypto-status.html',
            searchText: '암호화 아키텍처 고도화 SHA2 SHA3 HMAC CMAC 구현 완료 보안 암호화 인프라'
        },
        {
            title: '콘텐츠 관리 자동화',
            description: 'Vimeo · YouTube 자동 연동 API',
            date: '',
            category: '자동화',
            image: basePath + 'assets/updateimage/content-api-development.png',
            link: isNewsroomArticle ? '../update-articles/article-content-api.html' : 'article-content-api.html',
            searchText: '콘텐츠 관리 자동화 Vimeo YouTube 자동 연동 API 자동화 콘텐츠'
        },
        {
            title: 'LX2Crypto 검증 준비 진행',
            description: 'LX2Crypto V1.0 개발 및 국가 검증 준비',
            date: '',
            category: '보안',
            image: basePath + 'assets/updateimage/crypto-module-verification.png',
            link: isNewsroomArticle ? '../update-articles/article-crypto-module.html' : 'article-crypto-module.html',
            searchText: 'LX2Crypto 검증 준비 진행 LX2Crypto V1.0 개발 국가 검증 준비 보안 검증 암호모듈'
        }
    ];
    
    // 통합 검색 데이터
    const allArticles = [...newsroomArticles, ...updateArticles];
    
    function createSearchResultCard(article) {
        const card = document.createElement('article');
        card.style.cssText = 'background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: all 0.3s; cursor: pointer; border: 1px solid rgba(0,0,0,0.05); display: flex; flex-direction: column; height: 100%;';
        card.onmouseover = function() { this.style.transform = 'translateY(-4px)'; this.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; };
        card.onmouseout = function() { this.style.transform = 'translateY(0)'; this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; };
        
        const link = document.createElement('a');
        link.href = article.link;
        link.style.cssText = 'text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;';
        
        const imageDiv = document.createElement('div');
        imageDiv.style.cssText = 'position: relative; height: 200px; overflow: hidden; background: #f8f9fa;';
        const img = document.createElement('img');
        img.src = article.image;
        img.alt = article.title;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; display: block;';
        imageDiv.appendChild(img);
        
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'padding: 1.5rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;';
        
        const categorySpan = document.createElement('span');
        categorySpan.textContent = article.category;
        categorySpan.style.cssText = 'color: #8b5cf6; font-weight: 600; font-size: 0.75rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; display: inline-block;';
        
        const titleH4 = document.createElement('h4');
        titleH4.textContent = article.title;
        titleH4.style.cssText = 'font-size: 1rem; font-weight: 600; margin: 0 0 0.75rem 0; color: #1a1a1a; line-height: 1.4;';
        
        const descP = document.createElement('p');
        descP.textContent = article.description;
        descP.style.cssText = 'font-size: 0.875rem; color: #666; margin: 0 0 1rem 0; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;';
        
        contentDiv.appendChild(categorySpan);
        contentDiv.appendChild(titleH4);
        contentDiv.appendChild(descP);
        
        if (article.date) {
            const dateP = document.createElement('p');
            dateP.textContent = article.date;
            dateP.style.cssText = 'font-size: 0.75rem; color: #999; margin: 0;';
            contentDiv.appendChild(dateP);
        }
        
        link.appendChild(imageDiv);
        link.appendChild(contentDiv);
        card.appendChild(link);
        
        return card;
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // 검색어가 없으면 원래 레이아웃 표시
                if (articleContentWrapper) articleContentWrapper.style.display = 'block';
                if (searchResultsContainer) searchResultsContainer.style.display = 'none';
                return;
            }
            
            // 검색 결과 필터링
            const filteredResults = allArticles.filter(article => 
                article.searchText.toLowerCase().includes(searchTerm) ||
                article.title.toLowerCase().includes(searchTerm) ||
                article.description.toLowerCase().includes(searchTerm)
            );
            
            // 원래 레이아웃 숨기고 검색 결과 표시
            if (articleContentWrapper) articleContentWrapper.style.display = 'none';
            if (searchResultsContainer) searchResultsContainer.style.display = 'block';
            
            // 검색 결과 그리드 초기화
            if (searchResultsGrid) searchResultsGrid.innerHTML = '';
            
            if (filteredResults.length === 0) {
                if (searchResultsTitle) {
                    searchResultsTitle.textContent = '검색 결과가 없습니다.';
                    searchResultsTitle.style.color = '#999';
                }
            } else {
                if (searchResultsTitle) {
                    searchResultsTitle.textContent = `전체 검색 결과 (${filteredResults.length}개)`;
                    searchResultsTitle.style.color = '#1a1a1a';
                }
                
                // 검색 결과 그리드를 항상 3x3으로 고정
                if (searchResultsGrid) {
                    searchResultsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                }
                
                // 검색 결과 카드 생성
                filteredResults.forEach(article => {
                    const card = createSearchResultCard(article);
                    if (searchResultsGrid) searchResultsGrid.appendChild(card);
                });
            }
        });
    }
});


// Header.js

import React from 'react';

const Header = () => {
    const githubUrl = 'https://github.com/birariro/springboot-banner-generator';

    const handleGithubButtonClick = () => {
        window.location.href = githubUrl;
    };

    const image = "/icons/github-icon.png";  // public 디렉토리 기준의 경로
    return (
        <header style={{ position: 'absolute', top: '0', right: '0', padding: '10px' }}>
            <button
                onClick={handleGithubButtonClick}
                style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}  // 테두리 제거 및 스타일 추가
            >
                <img
                    src={process.env.PUBLIC_URL + image}
                    alt="GitHub"
                    style={{ maxWidth: '40px', maxHeight: '40px' }}  // 크기 조절 스타일 추가
                />
            </button>
        </header>
    );
};

export default Header;

// App.js

import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import './App.css';
import {StringToBinary} from "./core/BinaryArt";
import {colorToAnsi} from "./core/ColorConverter";

const App = () => {
    const [bannerText, setBannerText] = useState('');
    const [color1, setColor1] = useState('#000000');
    const [color2, setColor2] = useState('#ffffff');
    const [outputText, setOutputText] = useState('');

    const handleBannerTextChange = (e) => {
        // 영문자만 허용하는 정규식
        const regex = /^[a-zA-Z]*$/;
        const inputValue = e.target.value;

        // 입력 값이 정규식과 일치할 때만 값을 업데이트
        if (regex.test(inputValue) || inputValue === '') {
            setBannerText(inputValue);
        }
    };

    const handleColor1Change = (color) => {
        setColor1(color.hex);
    };

    const handleColor2Change = (color) => {
        setColor2(color.hex);
    };

    const handleGenerateOutput = () => {

        const generatedOutput = `배너 텍스트: ${bannerText}, 색상 1: ${color1}, 색상 2: ${color2}`;
        console.log(generatedOutput);
        console.log(`배너 텍스트: ${bannerText}, 색상 1: ${colorToAnsi(color1)}, 색상 2: ${colorToAnsi(color2)}`);
        let binaryArray = StringToBinary(bannerText);
        console.log(binaryArray);

        let binaryOutput = '';
        for (const binary of binaryArray) {
            let binaryString = '';
            for (const binaryBit of binary) {
                binaryString += binaryBit;
            }
            console.log(binaryString);
            binaryOutput += binaryString + '\n';
        }

        setOutputText('\n\n' + binaryOutput);
    };

    const handleDownload = () => {
        // Blob을 사용하여 파일 생성
        const blob = new Blob([outputText], { type: 'text/plain' });

        // Blob을 URL로 변환
        const url = URL.createObjectURL(blob);

        // 다운로드 링크 생성 및 클릭
        const a = document.createElement('a');
        a.href = url;
        a.download = 'banner.txt';
        document.body.appendChild(a);
        a.click();

        // 다운로드 후 URL 해제
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    return (
        <div className="container">
            <div className="vertical-input">
                <input
                    type="text"
                    id="bannerText"
                    value={bannerText}
                    onChange={handleBannerTextChange}
                    placeholder="배너 텍스트를 입력하세요"
                    style={{ width: '100%', padding: '10px' }}
                />
            </div>
            <div className="horizontal-input-container">
                <div className="centered">
                    <label>색상 1</label>
                    <GithubPicker color={color1} onChangeComplete={(color) => handleColor1Change(color)} />
                </div>
                <div className="centered">
                    <label>색상 2</label>
                    <GithubPicker color={color2} onChangeComplete={(color) => handleColor2Change(color)} />
                </div>
            </div>
            <div className="centered">
                <button onClick={handleGenerateOutput}>결과 생성</button>
                <span style={{ margin: '0 10px' }}></span>
                <button onClick={handleDownload}>다운로드</button>
            </div>
            <div>
                <h2>Preview</h2>
                <pre>{outputText}</pre>
            </div>
        </div>
    );
};

export default App;

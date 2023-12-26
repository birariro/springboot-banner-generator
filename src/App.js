// App.js

import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import './App.css';
import {drawColor, StringToBinary} from "./core/StringConverter";
import {allowedColors,colorToSpringAnsi} from "./core/ColorConverter";

const App = () => {
    const [bannerText, setBannerText] = useState('');
    const [color1, setColor1] = useState('#000000');
    const [color2, setColor2] = useState('#ffffff');
    const [outputText, setOutputText] = useState('');
    const [fileText, setFileText] = useState('');


    const handleBannerTextChange = (e) => {

        const regex = /^[a-zA-Z]*$/;
        let inputValue = e.target.value;

        if (regex.test(inputValue) || inputValue === '') {
            inputValue = inputValue.toUpperCase();
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

        if(bannerText.trim().length == 0){
            alert("input plz")
        }
        const generatedOutput = `배너 텍스트: ${bannerText}, 색상 1: ${color1}, 색상 2: ${color2}`;
        console.log(generatedOutput);
        let binaryArray = StringToBinary(bannerText);
        let _output = binaryArrayToString(binaryArray);

        setOutputText(_output);
        setFileText(drawColor(_output,colorToSpringAnsi(color1),colorToSpringAnsi(color2)));
    };

    const binaryArrayToString = (binaryArray) => {
        let output = '';
        for (const binary of binaryArray) {
            let binaryString = '';
            for (const binaryBit of binary) {
                binaryString += binaryBit;
            }
            output += binaryString + '\n';
        }
        return output;
    }
    const handleDownload = () => {

        const blob = new Blob([fileText], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);
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
            <div className="title">SpringBoot Banner Generator</div>
            <div className="vertical-input">
                <input
                    type="text"
                    id="bannerText"
                    value={bannerText}
                    onChange={handleBannerTextChange}
                    placeholder="영문 배너 텍스트를 입력하세요"
                    style={{ width: '100%', padding: '10px' }}
                />
            </div>
            <div className="horizontal-input-container">
                <div className="centered">
                    <label>색상 1</label>
                    <GithubPicker color={color1} onChangeComplete={(color) => handleColor1Change(color)} colors={allowedColors} triangle={"hide"}/>


                </div>
                <div className="centered">
                    <label>색상 2</label>
                    <GithubPicker color={color2} onChangeComplete={(color) => handleColor2Change(color)} colors={allowedColors} triangle={"hide"} />
                </div>
            </div>
            <div className="centered">
                <button onClick={handleGenerateOutput}>Generate</button>
                <span style={{ margin: '0 10px' }}></span>
                <button onClick={handleDownload} disabled={!fileText.trim()}>Download</button>
            </div>
            <div>
                <h2 hidden={!fileText.trim()}>Preview</h2>
                <pre>{outputText}</pre>
            </div>
            <div className="description" hidden={!fileText.trim()}>
                다운로드한 파일을
                'src/main/resources' 에 추가
            </div>
        </div>
    );
};

export default App;
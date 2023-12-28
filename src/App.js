
import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import { Prompt } from "react-prompt-viewer";
import './App.css';

import Header from './Header';

const StringConverter =  require('./core/StringConverter');
const ColorConverter =  require('./core/ColorConverter');

const App = () => {
    const [bannerText, setBannerText] = useState('');
    const [color1, setColor1] = useState('#000000');
    const [color2, setColor2] = useState('#ffffff');
    const [outputText, setOutputText] = useState('');
    const [fileText, setFileText] = useState('');


    const handleBannerTextChange = (e) => {

        const regex = /^[a-zA-Z\s]*$/;
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

        if(bannerText.trim().length === 0){
            alert("input plz")
        }
        console.log(`banner text: ${bannerText}, first color: ${color1}, second color: ${color2}`);

        let binaryArray = StringConverter.StringToBinary(bannerText);
        let _output = binaryArrayToString(binaryArray);

        setOutputText(_output);
        setFileText(StringConverter.drawColor(_output,ColorConverter.colorToSpringAnsi(color1),ColorConverter.colorToSpringAnsi(color2)));
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
        <div>
            <Header />
            <div className="full-container">
                <div className="container">

                    <div className="title">SpringBoot Banner Generator</div>
                    <div className="vertical-input">
                        <input
                            type="text"
                            id="bannerText"
                            value={bannerText}
                            onChange={handleBannerTextChange}
                            placeholder="Input Only English Text"
                            style={{ width: '90%', padding: '10px' }}
                        />
                    </div>
                    <div className="horizontal-input-container">
                        <div className="centered">
                            <label className="centered-label">first color</label>
                            <div style={{height:'5px'}}></div>
                            <GithubPicker color={color1} onChangeComplete={(color) => handleColor1Change(color)} colors={ColorConverter.allowedColors} triangle={"hide"}/>
                        </div>

                        <div className="centered">
                            <label className="centered-label">second color</label>
                            <div style={{height:'5px'}}></div>
                            <GithubPicker color={color2} onChangeComplete={(color) => handleColor2Change(color)} colors={ColorConverter.allowedColors} triangle={"hide"} />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="generate-button" onClick={handleGenerateOutput}>
                            Generate
                        </button>
                        <button className="download-button" onClick={handleDownload} disabled={!fileText.trim()}>
                            Download
                        </button>
                    </div>

                </div>
            </div>
            <div className="terminal-container">
                {outputText !== '' && <Prompt content={outputText} />}
            </div>
            {fileText !=='' && <div className="description" >
                The downloaded file path is
                'src/main/resources'
            </div>}
        </div>
    );
};

export default App;
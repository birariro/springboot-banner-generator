import React, {useEffect, useState} from 'react';
import { CharToBinary } from "./CharToBinary";
import './App.css';

const CharacterGrid = (props) => {
    const text = props.text;

    useEffect(() => {

        drawCharacter(text);
    }, [text]);

    const randomGreenStyleClassName = () => {

        const colors = ["#066D32","#26A641","#3CD353"]
        const min = 0;
        const max = 2;
        return colors[(Math.floor(Math.random() * (max - min + 1)) + min)];
    };

    const drawCharacter = (text) => {
        console.log(text)
        if (text === undefined) return;
        const inputs = text.toUpperCase();

        const grid = document.getElementById("characterGrid");
        grid.innerHTML = ""; // 이전에 그려진 그리드를 비움

        const boxSize = 20; // 각 박스의 크기
        const padding = 2; // 각 박스 사이의 간격
        const pixelSize = 6;
        let xPos = 0;
        for (let i = 0; i < inputs.length; i++) {
            const characterRows = CharToBinary(inputs[i]);

            let characterWidth = characterRows[0].length;
            const characterHeight = characterRows.length;
            //마지막 글자라면 공백 제거
            if( i == inputs.length -1){
                characterWidth -=1
            }

            for (let row = 0; row < characterHeight; row++) {

                for (let col = 0; col < characterWidth; col++) {
                    const x = xPos + col * (boxSize + padding);
                    const y = row * (boxSize + padding);
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute("x", x);
                    rect.setAttribute("y", y);
                    rect.setAttribute("width", boxSize);
                    rect.setAttribute("height", boxSize);
                    if(row == characterHeight){

                        rect.setAttribute("fill",  "red");
                    }else{
                        rect.setAttribute("fill", characterRows[row][col] === "1" ? randomGreenStyleClassName() : "black");
                    }


                    grid.appendChild(rect);
                }
            }


            xPos += characterWidth * (boxSize + padding);
        }


        grid.setAttribute("width", (boxSize+padding)*pixelSize*inputs.length);
        grid.setAttribute("height", (boxSize+padding)*pixelSize*inputs.length);

    };

    return (
        <svg id="characterGrid"></svg>
    );
};

export default CharacterGrid;



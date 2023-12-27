import React from 'react';

const Terminal = ({outputText}) => {
    const processNewlines = (text) => {

        if(text === '') return ""
        text.split('\n').map((line, index) => (
           console.log(line)
        ));

        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
            </React.Fragment>
        ));
    };

    return (
        <div className="terminal">
            <div className="header">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
            </div>
            <div className="content">
                {processNewlines(outputText)}
            </div>
        </div>
    );
};

export default Terminal;

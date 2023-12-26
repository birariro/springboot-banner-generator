// AnsiColor 변환 함수
function colorToAnsi(hexColor){

    console.log(hexColor)
    // hexColor를 RGB로 변환
    const rgb = hexToRgb(hexColor);

    // AnsiColor로 변환
    const ansiColor = `\\033[38;2;${rgb.r};${rgb.g};${rgb.b}m`;

    return ansiColor;
}

// Hex 색상을 RGB로 변환하는 함수
function hexToRgb (hex){
    // Hex 값을 RGB로 변환
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
};

module.exports = {
    colorToAnsi
};

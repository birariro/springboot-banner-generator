
function colorToSpringAnsi(hexColor) {
    console.log(`color: ${hexColor}`)
    if (hexColor === undefined) {
        return "${AnsiColor.DEFAULT}";
    }

    let string = ansiColorToHex(hexColor);
    console.log(`\${AnsiColor.${string}}`);
    return `\${AnsiColor.${string}}`;
}

const allowedColors = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#FFFF00',
    '#0000FF',
    '#FF00FF',
    '#00FFFF',
    '#FFFFFF',
    '#808080',
    '#FF8080',
    '#80FF80',
    '#FFFF80',
    '#8080FF',
    '#FF80FF',
    '#80FFFF',
];

function ansiColorToHex(ansiColor) {
    const upperCaseAnsiColor = ansiColor.toUpperCase();
    switch (upperCaseAnsiColor) {
        case allowedColors[0]:
            return 'BRIGHT_BLACK';
        case allowedColors[1]:
            return 'BRIGHT_RED';
        case allowedColors[2]:
            return 'BRIGHT_GREEN';
        case allowedColors[3]:
            return 'BRIGHT_YELLOW';
        case allowedColors[4]:
            return 'BRIGHT_BLUE';
        case allowedColors[5]:
            return 'BRIGHT_MAGENTA';
        case allowedColors[6]:
            return 'BRIGHT_CYAN';
        case allowedColors[7]:
            return 'BRIGHT_WHITE';
        case allowedColors[8]:
            return 'BLACK';
        case allowedColors[9]:
            return 'RED';
        case allowedColors[10]:
            return 'GREEN';
        case allowedColors[11]:
            return 'YELLOW';
        case allowedColors[12]:
            return 'BLUE';
        case allowedColors[13]:
            return 'MAGENTA';
        case allowedColors[14]:
            return 'CYAN';
        default:
            return 'BRIGHT_BLACK';
    }
}


module.exports = {
    colorToSpringAnsi,allowedColors
};

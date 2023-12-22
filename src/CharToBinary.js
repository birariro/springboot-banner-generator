function CharToBinary(char) {
    const characters = new Map([
        ["A", [
            "011100",
            "100010",
            "111110",
            "100010",
            "100010"
        ]],
        ["B", [
            "111100",
            "100010",
            "111100",
            "100010",
            "111100"
        ]],
        ["C", [
            "011100",
            "100010",
            "100000",
            "100010",
            "011100"
        ]],
        ["D", [
            "111100",
            "100010",
            "100010",
            "100010",
            "111100"
        ]],
        ["E", [
            "111110",
            "100000",
            "111100",
            "100000",
            "111110"
        ]],
        ["F", [
            "111110",
            "100000",
            "111100",
            "100000",
            "100000"
        ]],
        ["G", [
            "011100",
            "100010",
            "100000",
            "100110",
            "011100"
        ]],
        ["H", [
            "100010",
            "100010",
            "111110",
            "100010",
            "100010"
        ]],
        ["I", [
            "111110",
            "001000",
            "001000",
            "001000",
            "111110"
        ]],
        ["J", [
            "111110",
            "000100",
            "000100",
            "100100",
            "011000"
        ]],
        ["K", [
            "100010",
            "100100",
            "111000",
            "100100",
            "100010"
        ]],
        ["L", [
            "100000",
            "100000",
            "100000",
            "100000",
            "111110"
        ]],
        ["M", [
            "100010",
            "110110",
            "101010",
            "100010",
            "100010"
        ]],
        ["N", [
            "100010",
            "110010",
            "101010",
            "100110",
            "100010"
        ]],
        ["O", [
            "011100",
            "100010",
            "100010",
            "100010",
            "011100"
        ]],
        ["P", [
            "111100",
            "100010",
            "111100",
            "100000",
            "100000"
        ]],
        ["Q", [
            "011100",
            "100010",
            "101010",
            "100100",
            "011010"
        ]],
        ["R", [
            "111100",
            "100010",
            "111100",
            "100100",
            "100010"
        ]],
        ["S", [
            "011110",
            "100000",
            "011100",
            "000010",
            "111100"
        ]],
        ["T", [
            "111110",
            "001000",
            "001000",
            "001000",
            "001000"
        ]],
        ["U", [
            "100010",
            "100010",
            "100010",
            "100010",
            "011100"
        ]],
        ["V", [
            "100010",
            "100010",
            "100010",
            "010100",
            "001000"
        ]],
        ["W", [
            "100010",
            "100010",
            "101010",
            "110110",
            "100010"
        ]],
        ["X", [
            "100010",
            "010100",
            "001000",
            "010100",
            "100010"
        ]],
        ["Y", [
            "100010",
            "010100",
            "001000",
            "001000",
            "001000"
        ]],
        ["Z", [
            "111110",
            "000100",
            "001000",
            "010000",
            "111110"
        ]]
    ]);

    return characters.get(char);
}
module.exports = {
    CharToBinary,
};

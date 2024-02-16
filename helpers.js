var removeUselessWords = function (txt) {
    var uselessWordsArray =
        [
            "10 ", "00,10", "08,10", "", "", "10"
        ];

    var expStr = uselessWordsArray.join("|");
    return txt.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ')
        .replace(/\s{2,}/g, ' ');
}
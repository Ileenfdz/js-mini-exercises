function center(str, width, fill = ' ') {
    let strLeng = str.length
    if (strLeng <= 0) {
        return fill.repeat(width)
    } else if (strLeng < width) {
        if ((width - strLeng) % 2 == 0) {
            let toFill = (width - strLeng) / 2
            return fill.repeat(toFill) + str + fill.repeat(toFill)
        } else if ((width - strLeng) % 2 != 0) {
            let first = (width - strLeng) / 2
            if (first % 2 == 0) {
                return fill.repeat(first - 1) + str + fill.repeat(first)
            } else if (first % 2 != 0) {
                return fill.repeat(first + 1) + str + fill.repeat(first)
            }
        }
    } else if (strLeng >= width) {
        return str
    }
}

module.exports = center
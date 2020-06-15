import { format, unit } from 'mathjs'

export function text_convert(input) {
    // converts text to evaluable with text_evaluate
    return input
}

export function text_evaluate(input, parser) {
    // evalutates text
    let output = ""
    try {
        output = parser.evaluate(input)
        if (typeof output === 'number') {
            parser.evaluate("ans=" + output.toString())
        }
        output = format(output, {precision: 14})
    } catch (error) {
        if (error instanceof TypeError) {
            output = "TypeError"
        } else {
            output = "Error. "
            if (error["message"]) {
                output = error["message"]
            }
        }
    }
    return output.toString()
}
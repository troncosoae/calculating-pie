import { create, all } from 'mathjs'

const math = create(all, {
})

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
        output = math.format(output, {precision: 14})
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

export function change_angle_type(angle_type, parser) {

    let replacements = {}
    let math = create(all, {})

    // our extended configuration options
    const config = {
        angles: angle_type // 'rad', 'deg', 'grad'
    }

    const fns1 = ['sin', 'cos', 'tan', 'sec', 'cot', 'csc']
    fns1.forEach(function(name) {
        const fn = math[name] // the original function

        const fnNumber = function (x) {
        // convert from configured type of angles to radians
        switch (config.angles) {
            case 'deg':
            return fn(x * math.pi / 180)
            case 'grad':
            return fn(x * math.pi / 200)
            default:
            return fn(x)
        }
        }

        // create a typed-function which check the input types
        replacements[name] = math.typed(name, {
        'number': fnNumber,
        'Array | Matrix': function (x) {
            return math.map(x, fnNumber)
        }
        })
    })

    const fns2 = ['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec']
    fns2.forEach(function(name) {
        const fn = math[name] // the original function

        const fnNumber = function (x) {
        const result = fn(x)

        if (typeof result === 'number') {
            // convert to radians to configured type of angles
            switch(config.angles) {
            case 'deg':  return result * 180 / math.pi
            case 'grad': return result * 200 / math.pi
            default: return result
            }
        }

        return result
        }

        // create a typed-function which check the input types
        replacements[name] = math.typed(name, {
        'number': fnNumber,
        'Array | Matrix': function (x) {
            return math.map(x, fnNumber)
        }
        })
    })

    // import all replacements into math.js, override existing trigonometric functions
    math.import(replacements, {override: true})
    
    let new_parser = math.parser()
    new_parser.scope = parser.scope


    return new_parser
}

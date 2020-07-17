import { create, all, typeOf } from 'mathjs'

const math = create(all, {
})

export function text_convert(input) {
    // converts text to evaluable with text_evaluate
    return input
}

export function text_evaluate(input, parser) {
    // evalutates text
    console.log(input)
    let output = ""
    try {
        output = parser.evaluate(input)
        // console.log(typeof output)
        // console.log(typeOf(output))
        // console.log(output)
        if (typeof output === 'number') {
            parser.evaluate("ans=" + output.toString())
        } else if (typeOf(output) === 'Unit' || typeOf(output) === 'Complex') {
            parser.evaluate("ans=" + output.toString())
        }
        output = math.format(output, {precision: 14})
        console.log(parser.scope)
    } catch (error) {
        if (error instanceof TypeError) {
            try {
                let newScope = {...parser.scope}
                for (const [key, value] of Object.entries(newScope)) {
                    newScope[key] = value.value ? value.value : value;
                }
                output = math.evaluate(input, newScope)
                
                for (const [key, value] of Object.entries(newScope)) {
                    if (!(key in parser.scope)) {
                        parser.scope[key] = value
                    } 
                }
            } catch(error) {
                output = "Error"
                if (error["message"]) {
                    output = error["message"]
                }
            }
        } else {
            output = "Error"
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

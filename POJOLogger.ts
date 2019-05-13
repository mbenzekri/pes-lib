import * as cef from './step'

export const declaration: cef.Declaration = {
    gitid: 'mbenzekri/cef-fs/steps/POJOLogger',
    title: 'Logs features',
    desc: ' logs each inputed pojo through console',
    inputs: {
        'pojos': {
            desc: 'pojo to log'
        }
    },
    outputs: {
    },
    parameters: {
        'expression': {
            desc: 'expression to log',
            type: 'string',
        },
    },
    fields: [
        {
            key: 'expression',
            type: 'text',
            defaultValue: '${JSON.stringify(feature)}',
            templateOptions: {
                label: 'expression to log',
                required: true,
            }
        },
    ]
}

class POJOLogger extends cef.Step {
    constructor (params: cef.ParamsMap) {
        super(declaration, params)
    }
    async doit() {
        let feature = await this.input('pojos');
        while (feature !== cef.EOF) {
            console.log(this.params.expression)
            feature = await this.input('pojos');
        } 
    }
}

export function  create(params: cef.ParamsMap) : POJOLogger  { return new POJOLogger(params) };
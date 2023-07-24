export const command = 'config <action> [key] [value]'

export const describe = 'Set config key:value'

export const builder = {
    action: {
        describe: "Get/Set values",
        choices: ['get', 'set'],
        type: 'string',
    },
    key: {
        describe: "Config property name",
        choices: ['url'],
        type: 'string',
    },
    value: {
        describe: "Property value",
        type: 'string',
    },
}

export async function handler(argv) {
    const {action, key, value} = argv;

    if (action === 'get') {
        console.log("get command");
    }
    else {
        console.log("set command", key, value);
    }
}

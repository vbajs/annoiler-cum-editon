function annoilText(input) {
    input = (input).split('').map((char) => {
        return `||${char}||`
    }).join('');
    return input;
};

const removeCommand = cumcord.commands.addCommand({
    name: 'annoil',
    description: 'Makes you send messages with spoilers around every single character.',
    args: [
        {
            name: 'message',
            description: 'Message goes here',
            type: 'string',
            required: true
        }
    ],
    handler: (ctx) => {
        return annoilText(ctx.args.message)
    }
})

export default {
    onUnload() {
        removeCommand()
    }
}

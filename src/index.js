const messageHandler = cumcord.modules.webpack.findByProps('sendMessage');

let unpatch = [];

function annoilText(input) {
    input = (input).split('').map((char) => {
        return `||${char}||`
    }).join('');
    return input;
};

export default {
    onLoad() {
        unpatch.push(cumcord.patcher.after('sendMessage', messageHandler, (args) => {
            if (args[1].content.startsWith('!annoil')) {
                const message = args[1].content.replace('!annoil', '');
                
                const annoiledMessage = annoilText(message);

                args[1].content = annoiledMessage;
            };
            return args;
        }));
    },

    onUnload() {
        for (const p in unpatch) {
            p()
        }
    },
}

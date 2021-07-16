const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

var guesses;
var num = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot)return;

    if (msg.content === '!hello') {
        msg.reply('    hello');
    }
});



client.on('message', msg => {
    if (msg.author.bot)return;

    if (msg.content === '!ping') {
        msg.reply('pong');
    }
});

client.on('message', msg => {
    if (msg.author.bot)return;
    
    if (msg.content === "!time"){
        const moment = require('moment');
        const currentDateTime = moment().format('YYYY/MM/DD HH:mm:ss');
        msg.reply(currentDateTime);
    }
})

client.on('message', (message) => {
    var mes = message.content.split(" ");
    if(message.content == '!pick') {
        message.reply('1-100猜一個');
        num = Math.floor((Math.random() * 100) + 1);
        guesses = 0;
    }
    if(mes[0] == '!match') {
        if (num == 0)
        {
            message.reply('1-100');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] == num)
        {
            guesses++;
            message.reply('You got it! Only took ' + guesses + ' tries.');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] < num)
        {
            message.reply(mes[1] + '太小');
            guesses++;
        }
        else if(mes[1] > num)
        {
            message.reply(mes[1] + '太大');
            guesses++;
        }
        else
        {
            message.reply("輸入數字");
            guesses++;
        }
    }

});

client.on('message', msg => {
    //if(msg.author.id==="682809473085079625")return;
    if(msg.content.search(`<:712256088396791846:845966871437246504>`)!=-1){
    msg.react(`<:712256088396791846:845966871437246504>`);
   }
});


client.login(token);
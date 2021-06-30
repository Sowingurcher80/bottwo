module.exports = {
    name: 'youtube',
    description: "Sends youtube link.",
    execute(message, args){
        
        if (message.member.roles.cache.has('713572180939505664')){
            message.channel.send('https://www.youtube.com/channel/UCYAS9vBbCc-A5mqlX5xuE_w');
       
       
        } else {
            message.channel.send('You cant use this command.');
        }
       
    }
}
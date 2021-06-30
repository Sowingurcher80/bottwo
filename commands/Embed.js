module.exports = {
    name: 'embed',
    description: "This is a Embed.",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('858399740260646922')){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#47cfff')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/channel/UCYAS9vBbCc-A5mqlX5xuE_w')
        .setDescription('Server Rules')
        .addFields(
            {name: 'Rule 1', Value: 'Mhm' },
            {name: 'Rule 2', Value: 'Mhm' },
            {name: 'Rule 3', Value: 'Mhm' },
            {name: 'Rule 4', Value: 'Mhm' },
            {name: 'Rule 5', Value: 'Mhm' },
            {name: 'Rule 6', Value: 'Mhm' },
            {name: 'Rule 7', Value: 'Mhm' },
            {name: 'Rule 8', Value: 'Mhm' },
            {name: 'Rule 9', Value: 'Mhm' },
            {name: 'Rule 10', Value: 'Mhm' }

        )
        .setImage('https://yt3.ggpht.com/ytc/AAUvwnhGZCUTCJ7K2FF6MMpZMfQJ5IL1VXFeYwn9k6n-AA=s900-c-k-c0x00ffffff-no-rj')
        .setFooter('Make sure to sub to Score_more on youtube.');

        message.channel.send(newEmbed);
    }
}        } 
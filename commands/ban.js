module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if (message.member.roles.cache.has('858399740260646922')){
            
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
            message.channel.send('You cant use this command.');
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            
            message.channel.send(`Please put a person to ban.`);}
        
        }
    }
}

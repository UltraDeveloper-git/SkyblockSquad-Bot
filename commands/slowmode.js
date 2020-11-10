module.exports = {
    name: 'slowmode',
    description: 'slowmode',
    execute(message, args) {
    
        if(!(message.member.hasPermission("MANAGE_CHANNELS"))) return message.channel.send("**Error:** You don't have permission! **(MANAGE_CHANNELS)**");

        if(args.length < 1 || args.length > 1) return message.channel.send("**Error:** Invalid syntax! Please use **,slowmode [duration]**");

        var slowmode = args[0];

        if(slowmode.endsWith("m")) {
            var multiplier = 60;
            slowmode = slowmode.slice(0, slowmode.length - 1);
        } else if(slowmode.endsWith("h")) {
            var multiplier = 3600;
            slowmode = slowmode.slice(0, slowmode.length - 1);
        } else {
            var multiplier = 1;
        }

        slowmode = parseInt(slowmode, 10);
        slowmode *= multiplier;

        var intCheck = slowmode / slowmode;
        if(intCheck != 1) return message.channel.send("**Error:** That is not a valid number!");

        if(slowmode < 1) return message.channel.send("**Error:** You can't set a negative slowmode!");

        if(slowmode > 21600) return message.channel.send("**Error:** You can't set slowmode higher then **6 hours**!");

        message.channel.setRateLimitPerUser(slowmode);
        message.channel.send("**Succes!** The slowmode has been changed! :stopwatch:");

    },
};
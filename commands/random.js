module.exports = {
    name: 'random',
    description: 'Generate a random numer between a certain minimum and maximum!',
    category: 'Fun & Games',
    aliases: ['randomnumber', 'rn', 'rand'],
    execute(client, message, args, isCommand, channel) {

        if (args.length > 2 || args.length < 2) return message.channel.send("**Error:** Invalid syntax! Please use **,random [minimum] [maximum]**!");

        var minimum = args[0];
        var maximum = args[1];

        minimum = parseInt(minimum, 10);
        maximum = parseInt(maximum, 10);

        var minimumCheck = minimum / 1;
        if (minimumCheck != minimum) return message.channel.send("**Error:** Oops! Something went wrong! *(Minimum amount is not a number)*");

        var maximumCheck = maximum / 1;
        if (maximumCheck != maximum) return message.channel.send("**Error:** Oops! Something went wrong! *(Maximum amount is not a number)*");

        if (!Number.isInteger(minimum)) return message.channel.send("**Error:** The minimum amount isn't a number!");
        if (!Number.isInteger(maximum)) return message.channel.send("**Error:** The maximum amount isn't a number!");


        if (minimum > maximum) return message.channel.send("**Error:** Your minimum count can't be higher then your maximum count!");
        if (minimum == maximum) return message.channel.send("**Error:** Dude! Why would you set the minimum and maximum to the same number? :thinking:");

        var random = randomInteger(minimum, maximum);

        message.channel.send(`**Your random number is:** ${random.toLocaleString()}`);

        function randomInteger(minimum, maximum) {

            var random = Math.floor(Math.random() * maximum + 1);

            for (let i = 0; true; i++) {
                if (random < minimum) {
                    random = Math.floor(Math.random() * maximum + 1);
                } else {
                    break;
                }
            }

            return random;

        }

    },
};
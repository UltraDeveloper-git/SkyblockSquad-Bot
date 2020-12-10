module.exports = {
    name: 'eventscore',
    description: 'See your score in the Christmas Event!',
    category: 'Miscellaneous',
    execute(client, message, args) {

        if (args.length > 0) return message.channel.send("**Error:** No arguments need to be provided!");

        message.channel.send("**Calculating score...**");

        var roleList = ["785071592412807180", 20, 100, "COMMON",
            "785098460764045313", 10, 100, "RARE",
            "785071932117876736", 10, 100, "RARE",
            "785086927182757908", 5, 100, "EPIC",
            "785098208761610250", 10, 10, "LEGENDARY",
            "785072139882463252", 10, 10, "LEGENDARY",
            "785088313392365588", 10, 10, "MYTHIC",
            "785072273295933442", 10, 10, "MYTHIC",
            "785090640132046858", 10, 10, "GODLY"];

        var score = calculateEventScore(roleList, message.member);

        return message.channel.send(`**Your score is:** ${score}`);

        function calculateEventScore(roles, member) {

            var score = 0;

            for (let i = 0; i < roles.length; i = i + 4) {

                var roleID = roles[i];
                var roleRarity = roles[i + 3];

                var hasRole = member.roles.cache.has(roleID);

                if (hasRole) {
                    if (!(roleRarity === "GODLY")) {
                        score++
                    } else {
                        score = score + 2;
                    }
                }

            }

            return score;

        }

    },
};
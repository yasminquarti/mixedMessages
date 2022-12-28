const humor = ['in good humor today!', 'very happy today', 'feeling neutral today.', 'somehwat annoyed today.', 'very displeased today.'];
const luck = ['shower everyone with good fortune.', 'give you a little extra luck.', 'leave the day in your hands.', 'do their best to make your life more difficult.'];
const chance = ['finding your soulmate!', 'winning the lottery!', 'being bored.', 'losing your keys.', 'being late to work.'];

const randomNum = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFortune = (arr) => {
        return {
           humor: randomNum(humor),
           luck: randomNum(luck),
           chance: randomNum(chance)
    };
};

const formatFortune = () => {
    const fortune = getFortune();
    return (`The spirits are ${fortune.humor}\n They may ${fortune.luck}\n You have a chance of ${fortune.chance}`);
};

const personalFortune = formatFortune();
console.log(personalFortune);
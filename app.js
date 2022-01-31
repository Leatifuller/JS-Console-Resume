let name = 'Tia Fuller'
let career = 'Full Stack Developer'
let description = 'My super power is my creativity'

let interest1 = 'IOT'
interest2 = 'Smart Cities'
interest3 = 'Music'
let interests = [interest1, interest2, interest3];


let job1 = {
    company: 'Amazon',
    title: 'Pelletier',
    description: 'Pelletized'
}
let job2 = {
    company: 'Walmart',
    title: 'Cashier',
    description: 'Handled transactions'
}

let job3 = {
    company: 'Jacks',
    title: 'Cashier',
    description: 'Handled transactions'
}
let jobs = [job1, job2, job3];

let skill1 = {
    skill: ' HTML',
    cool: false
};
let skill2 = {
    skill: ' CSS',
    cool: false
};
let skill3 = {
    skill: ' Crypto',
    cool: true
}
let skills = [skill1, skill2, skill3];

console.log('Name: ' + name.toUpperCase());
console.log('Career: ' + career);
console.log('Description: ' + description)
console.log('');
console.log('My Interests:');
console.log('* IOT');
console.log('* Smart cities');
console.log('* Music');
console.log('');
console.log('My Previous Experience: '); {
    for (i = 0; i < interests.length; ++i) {
        displayPosition(jobs[i].company, jobs[i].title, jobs[i].description);
    }
function displayPosition(company, title, description) {
console.log('* ' + title + ' at ' + company + '-'+ description)

}console.log('');
console.log('My Skills:');
for (i = 0; i < skills.length; ++i) {
    displaySkill(skills[i].skill, skills[i].cool);
}
function displaySkill(skill, cool) {
    if (cool == true) {
        console.log('* BAM:' + skill)
    } else {
        console.log('*' + skill)
    }
}

}

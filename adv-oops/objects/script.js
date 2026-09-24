const developer = {
    name: "Harsh Singh",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    followers: 120,

    introduce() {
        console.log(`Hi, I am ${this.name}`);
    },

    follow() {
        this.followers++;
        console.log(`${this.name} now has ${this.followers} followers`);
    }
};
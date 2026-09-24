let users=[
    "harsh@gmail.com",
    "xyz@gmail.com",
    "ssjks@gmail.com",
]

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*5);
        setTimeout(function(){
            let probability=Math.floor(Math.random()*10);
            if(probability<=5) return resolve("Email is sent successfully");
            else return reject("unable to send Email");
        },time*5);
    });
}

async function sendEmails(userList){
    let allresponses=userList.map(function(email){
        return sendEmail(email)
        .then(data=>{
            return data;
        })
        .catch(err=>{
            return err;
        });
    });
    let ans= await Promise.all(allresponses);
    console.log(ans);
    ans.forEach(function(status,index) {
        console.log(``)
    });
}
sendEmails(users);
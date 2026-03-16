let messages = [];

async function sendMsg(){

const q = document.getElementById("qInput").value;

if(!q) return;

messages.push({
role:"user",
content:q
});

document.getElementById("chat").innerHTML += "<p><b>You:</b> "+q+"</p>";

document.getElementById("qInput").value="";

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
messages:messages
})
});

const data = await res.json();

const ans = data.reply;

messages.push({
role:"assistant",
content:ans
});

document.getElementById("chat").innerHTML += "<p><b>SarvaAI:</b> "+ans+"</p>";

}

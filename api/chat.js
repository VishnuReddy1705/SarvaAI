export default async function handler(req,res){

const API_KEY = process.env.ANTHROPIC_API_KEY;

try{

const response = await fetch(
"https://api.anthropic.com/v1/messages",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-api-key":API_KEY,
"anthropic-version":"2023-06-01"
},
body:JSON.stringify({
model:"claude-haiku-4-5",
max_tokens:800,
messages:req.body.messages
})
});

const data = await response.json();

res.status(200).json({
reply:data.content[0].text
});

}
catch(err){

res.status(500).json({
error:err.message
});

}

}

document.addEventListener('DOMContentLoaded',function(){
  const sentbtn = document.getElementById('sentbtn');
  const botBtn = document.getElementById('bot-reply');
  sentbtn.addEventListener('click',async function(){
    const text = document.getElementById('sms').value.trim();
    try{
    const res = await fetch("http://127.0.0.1:8000/myapp/ProcessData/",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'Authorization':"123456789"
      },
      body:JSON.stringify({
        model:"Api-chat",
        message:[{role:'user',content:text}],
        
      })
    });
    const data = await res.json();
    /*console.log(data.choices[0].message.content);*/
    botBtn.textContent = data.reply;
    }
    catch(error){
      console.log("fetch error:", error);
    }
  })
})
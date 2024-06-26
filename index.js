

function sendmail(){
    var  params={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value
      
    };
    console.log(params)
    const serviceID="service_zptjgef";
  const templateID="template_illw4zt";

  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err)=>console.log(err));
  }
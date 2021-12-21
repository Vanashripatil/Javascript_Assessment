///GET
function getProducts(){
  return new Promise((resolve,rejected)=>{
      let http = new XMLHttpRequest();

      http.onload = function(){
          resolve(http.response);
      };
      http.onerror = function(){
          reject('Error Occurred');
      }
      http.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products');
      http.send();
  });
}; 


////POST

function postProduct(prd){
  return new Promise((resolve,rejected)=>{
      let http = new XMLHttpRequest();

      http.onload = function(){
          resolve(http.response);
      };

      http.onerror = function(){
          reject('Error Occurred');
      }

      http.open('POST','https://apiapptrainingnewapp.azurewebsites.net/api/Products');

      http.setRequestHeader('Content-Type', 'application/json');
      http.send(JSON.stringify(prd));

  });
}; 



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



////DELETE

function deleteProduct(prd){
  return new Promise((resolve,rejected)=>{
      let http = new XMLHttpRequest();

      http.onload = function(){
          resolve(http.response);
      };

      http.onerror = function(){
          reject('Error Occurred');
      }

      http.open('DELETE','https://apiapptrainingnewapp.azurewebsites.net/api/Products/' + `${prd.ProductRowId}`, true);

      http.setRequestHeader('Content-Type', 'application/json');
      http.send();

  });
}; 




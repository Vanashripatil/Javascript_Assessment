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

//// PUT

function postProduct(prd){
  return new Promise((resolve,rejected)=>{
        var data = {}
        //   data.ProductRowId = 26; 
        //   data.ProductId  =  "Prod-0015";
        //   data.ProductName  =  "Suger Checker";
        //   data.Manufacturer  =  "MS-Electrical";
        //   data.CategoryName  =  "Electronicsl";
        //   data.Description  =  "Suger Checker for Audults and youngsters";
        //   data.BasePrice  = 150;

          data.ProductRowId  = 27;
          data.ProductId  =  "Prod-0016";
          data.ProductName  =  "Monitor";
          data.Manufacturer  =  "MS-Electrical";
          data.CategoryName  =  "Electronics";  
          data.Description  =  "56 inches with Touch Screen";   // Changes done with descriptions and bestPrice
          data.BasePrice  = 5000;

          var json = JSON.stringify(data);
          
      let http = new XMLHttpRequest();
      http.open('PUT','https://apiapptrainingnewapp.azurewebsites.net/api/Products/' + `${prd.ProductRowId}`, true);
      http.setRequestHeader('Content-Type', 'application/json');

      http.onload = function(){
          resolve(http.response);
      };


      http.onerror = function(){
          reject('Error Occurred');
      }
     
      http.send(json);

  });
}; 

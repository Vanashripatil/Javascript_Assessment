function getProductsNoPromise(){
  console.log('In Method');

      let products = [];
      let http = new XMLHttpRequest();

      // subscribe to the Success and Error
      http.onload = function(){
          products = http.response;
          // Successful Execution
          console.log(`In Method ${http.response}`);
      };


      http.onerror = function(){
          // Failed Execution
          reject('Error Occurred');
      }


      // Open the HTTP Request to REST API
      // setting async as false is forceful Synchronous operation 
      http.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products', false);
      // send the request
      http.send();
console.log('exiting');
 return products;
}; 


function getProducts(){
  // logic for async operations based on Promise
  return new Promise((resolve,rejected)=>{
      let http = new XMLHttpRequest();

      // subscribe to the Success and Error
      http.onload = function(){
          // Successful Execution
          resolve(http.response);
      };


      http.onerror = function(){
          // Failed Execution
          reject('Error Occurred');
      }


      // Open the HTTP Request to REST API
      http.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products');
      // send the request
      http.send();

  });
}; 


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

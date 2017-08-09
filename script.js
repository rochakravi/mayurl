// Code goes here

var app = angular.module('myApp',[]) // empty array define dependency
  .controller('myCtrl',function($scope,$http){
    
      var jsonData =[];
     
    //$scope.showDivVal = true;
    
    $scope.msg='My Learning!';
    
     $scope.products=[
         'Samsung' ,
        'Nokia' ,
         'Lg' ,
         'VD' 
       ];
       
    
       
        $http.get('data.json')
        .then(function(response){
           var jsonDataFinal =[];
    
          jsonData =response.data[0].Content; //response.data[0].Content[0] //response.data 
          //alert(jdata[0]["Heading"])
          for (var k in jsonData){
            if (typeof jsonData[k] !== 'function') {
              //jsonDataFinal.push(jsonData[k]["Heading "]);
              $scope.msg2 = jsonData[k]["Heading "] ;
              console.log(jsonDataFinal);
            }
          }

        })
       
    
     
    
   
    
    $scope.showDetails = function(prdName){
      alert(prdName);
    }
    
  });
  
 
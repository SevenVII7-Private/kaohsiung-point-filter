var urlData = {
    point: [],
};

const url = "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97";

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = a001;
xhr.open("GET",url);

function a001(){
 	if( xhr.readyState === 4 && xhr.status === 200){

  		const result = JSON.parse(xhr.responseText);
           
        if( result.success === true ){
            console.log(result);
            urlData.point = result.result.records; 
            console.log(urlData.point);
  		}  
  	}
}

xhr.send(null);




var vm = new Vue ({
    el: "#app",
    data: urlData
})
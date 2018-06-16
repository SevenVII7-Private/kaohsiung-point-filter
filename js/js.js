var areas = ["全高雄","楠梓區","左營區","鼓山區","三民區","鹽埕區","前金區","新興區","苓雅區","前鎮區","旗津區","小港區","鳳山區","大寮區","鳥松區","林園區","仁武區","大樹區","大社區","岡山區","路竹區","橋頭區","梓官區","彌陀區","永安區","燕巢區","田寮區","阿蓮區","茄萣區","湖內區","旗山區","美濃區","內門區","杉林區","甲仙區","六龜區","茂林區","桃源區","那瑪夏",]

var urlData = {
    point: [],
    area: areas,
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
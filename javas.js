var Id = new Array();
var Pw = new Array();
var Name = new Array();
var Address = new Array();
var Pnum = new Array();
var usernum=0;

var flowername=['Pink Lanunculus', 'Gervera', 'Gongjakcho', 'Yellow prisia', 'Pink Tulip', 'Oxford', 'Butterfly',
			'Big flower', 'Mango tulip', 'Purple tulip', 'Purple prisia', 'White Lanumculus', 'Pink Lanumculus',
			'Purple hydrange', 'Yellow rose', 'Blue rose', 'Lavenderace rose', 'delphinium', 'Blue hydrangea', 
			'Calla', 'Pink hydrange', 'Yellow, Pink rose', 'Mixed flower', 'Mini rose', 'Green hydrange',
			'sunflower', 'chrysanthemum', 'White Chrysanthemum', 'Purple globe amaranth', 'Red globe amaranth', 'Pink Patrinia scabiosaefolia',
			'Pink Patrinia scabiosaefolia', 'Yellow Patrinia scabiosaefolia', 'Pink dahlia', 'burgundy dahlia', 'Orange dahlia', 'Cosmos',
			'Cotton flower', 'Stoke'];
var flowerimg=["spring1.png", "spring2.png", "spring3.jpg", "spring4.jpg", "spring5.jpeg", "spring6.jpeg", 
			"spring7.jpeg", "spring8.jpg", "spring9.jpeg", "spring10.jpg", "spring11.jpg", "spring12.png",
			"summer1.jpg", "summer2jpeg", "summer3.jpeg", "summer4.jpeg", "summer5.jpeg", "summer6.jpeg", 
			"summer7.jpeg", "summer8.jpeg", "summer9.jpeg", "summer10.jpeg", "summer11.jpeg", "summer12.jpeg",
			"fall1.jpg", "fall2jpg", "fall3.jpg", "fall4.jpg", "fall5.jpg", "fall6.jpg", 
			"fall7.jpg", "fall8.jpg", "fall9.jpg", "fall10.jpg", "fall11.jpeg", "fall12.jpg",
			"winter1.jpg", "winter2.jpg", "winter2.jpg", "winter9.jpg"];

var conname=[];
var conflowername=[];

function join(){
	Id[usernum] = document.getElementById("id").value;
	Pw[usernum] = document.getElementById("pw").value;
	Name[usernum] = document.getElementById("name").value;
	Address[usernum] = document.getElementById("address").value;
	Pnum[usernum] = document.getElementById("phonenum").value;
	usernum++;
	alert(usernum);
	alert(Id[usernum-1]);
	location.href = "spring.html";
}

function login(){
	var mid = document.getElementById("id").value;
	var mpw = document.getElementById("pw").value;
	alert(usernum);
	if(usernum>0){
		for(var i=0; i<usernum; i++){
			if(mid==Id[i]&&mpw==Pw[i]){
				alert("Success Login!");
				
			}
		}
		alert("Failed Login!11");
	}
	else{
		alert("Failed Login!22");
	}
}

var windowObj = null;
function detail(check){
	var settings ='fullscreen=yes,left=0,top=0';
	var windowObj = window.open("detail1.html","detail",settings);
	setTimeout(function () {
		windowObj.document.getElementById("itemimg").src = flowerimg[check-1];
		windowObj.document.getElementById("itemname").innerText = flowername[check-1];
	}, 700);
}

function condetail(check){
	var settings ='fullscreen=yes,left=0,top=0';
	var windowObj = window.open("detail1.html","detail",settings);
	setTimeout(function () {
		windowObj.document.getElementById("itemimg").src = flowerimg[check-1];
		windowObj.document.getElementById("itemname").innerText = flowername[check-1];
	}, 700);
}

function buy(){
	window.close();
}


		
	


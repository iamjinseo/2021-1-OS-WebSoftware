var Id='test';
var Pw='test';
var flowername=['Pink Lanunculus', 'Gervera', 'Gongjakcho', 'Yellow prisia', 'Pink Tulip', 'Oxford, Butterfly',
			'Big flower', 'Mango tulip', 'Purple tulip', 'Purple prisia', 'White Lanumculus', 'Pink Lanumculus',
			'Purple hydrange', 'Yellow rose', 'Blue rose', 'Lavenderace rose', 'delphinium', 'Blue hydrangea', 
			'Calla', 'Pink hydrange', 'Yellow, Pink rose', 'Mixed flower', 'Mini rose', 'Green hydrange',
			'sunflower', 'chrysanthemum', 'White Chrysanthemum', 'Purple globe amaranth', 'Red globe amaranth', 'Pink Patrinia scabiosaefolia',
			'Pink Patrinia scabiosaefolia', 'Yellow Patrinia scabiosaefolia', 'Pink dahlia', 'burgundy dahlia', 'Orange dahlia', 'Cosmos',
			'Cotton flower', 'Stoke', 'Siklamen', 'Calla'];
var flowerimg=["spring1.png", "spring2.png", "spring3.jpg", "spring4.jpg", "spring5.jpeg", "spring6.jpeg", 
			"spring7.jpeg", "spring8.jpg", "spring9.jpeg", "spring10.jpg", "spring11.jpg", "spring12.png",
			"summer1.jpg", "summer2jpeg", "summer3.jpeg", "summer4.jpeg", "summer5.jpeg", "summer6.jpeg", 
			"summer7.jpeg", "summer8.jpeg", "summer9.jpeg", "summer10.jpeg", "summer11.jpeg", "summer12.jpeg",
			"fall1.jpg", "fall2jpg", "fall3.jpg", "fall4.jpg", "fall5.jpg", "fall6.jpg", 
			"fall7.jpg", "fall8.jpg", "fall9.jpg", "fall10.jpg", "fall11.jpeg", "fall12.jpg",
			"winter1.jpg", "winter2.jpg", "winter3.jpg", "summer7.jpeg"];

var flowerprice=['25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
                 '17 $', '20 $', '20 $', '25 $', '20 $', '20 $',
				 '25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
                 '20 $', '25 $', '20 $', '25 $', '20 $', '30 $',
				 '25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
                 '20 $', '25 $', '20 $', '25 $', '20 $', '30 $',
				 '25 $', '30 $', '30 $', '20 $'];
var conflowername=['camomile', 'Papiopedilloom', 'Gongjakcho', 'prisia',
			 'Carnation', 'Pink hydrange', 'Cotton', 'Buque'];
var conflowerimg=["contex1.jpg", "contex2.jpg", "contex3.png", "contex4.jpg",
				  "contex5.jpg", "contex6.jpg", "contex7.jpg", "contex8.jpg",];

var conprice=['25 $', '35 $', '20 $', '25 $',
			  '30 $', '20 $', '70 $', '20 $'];

function join(){
	alert("Success Join!");
	location.href = "spring.html";
}

function login(){
	var mid = document.getElementById("id").value;
	var mpw = document.getElementById("pw").value;
	if(mid==Id&&mpw==Pw){
		alert("Success Login!");
	}
	else{
		alert("Failed Login!");
	}
}

function detail(check){
	var settings ='fullscreen=yes,left=0,top=0';
	var windowdetail = window.open("detail1.html","detail",settings);
	setTimeout(function () {
		windowdetail.document.getElementById("itemimg").src = flowerimg[check-1];
		windowdetail.document.getElementById("itemname").innerText = flowername[check-1];
		windowdetail.document.getElementById("itemprice").innerText = flowerprice[check-1];
	}, 700);
}	

function condetail(check){
	var settings ='fullscreen=yes,left=0,top=0';
	var conwindowdetail = window.open("detail1.html","condetail",settings);
	setTimeout(function () {
		conwindowdetail.document.getElementById("itemimg").src = conflowerimg[check-1];
		conwindowdetail.document.getElementById("itemname").innerText = conflowername[check-1];
		conwindowdetail.document.getElementById("itemprice").innerText = conprice[check-1];
	}, 700);
}

function buy(){
	var settings ='fullscreen=yes,left=0,top=0, target=_parent';
	var windowbuy1 = window.open("buy.html","buy",settings);
	setTimeout(function () {
		windowbuy1.document.getElementById("buyimg").src = document.getElementById("itemimg").getAttribute('src');
		windowbuy1.document.getElementById("buyname").innerText = document.getElementById("itemname").innerText;
		windowbuy1.document.getElementById("buyprice").innerText = document.getElementById("itemprice").innerText;
		windowbuy1.document.getElementById("buycount").innerText = document.getElementById("itemcount").value;
	}, 700);
}

function createbuy(){
	var settings ='fullscreen=yes,left=0,top=0';
	var windowbuy2 = window.open("buy.html","createbuy",settings);
	setTimeout(function () {
		windowbuy2.document.getElementById("buyimg").src = document.getElementById("main").getAttribute('src');
		windowbuy2.document.getElementById("buyname").innerText = "Create Bouquet";
		windowbuy2.document.getElementById("buyprice").innerText = document.getElementById("total").innerText+"$";
		windowbuy2.document.getElementById("buycount").innerText = "1";
	}, 700);
}

function pdaybuy(){
	var settings ='fullscreen=yes,left=0,top=0';
	var windowbuy3 = window.open("buy.html","pdaybuy",settings);
	setTimeout(function () {
		windowbuy3.document.getElementById("buyimg").src = document.getElementById("main").getAttribute('src');
		windowbuy3.document.getElementById("buyname").innerText =  document.getElementById("itemname").innerText;
		windowbuy3.document.getElementById("buyprice").innerText = document.getElementById("price").innerText+"$";
		windowbuy3.document.getElementById("buycount").innerText = document.getElementById("count").value;;
	}, 700);
}

function payment(){
	alert("Payment is complete.");
	self.opener=self;
	window.close();
}

		
	


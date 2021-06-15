var flowername = ['Pink Lanunculus', 'Gervera', 'Gongjakcho', 'Yellow prisia', 'Pink Tulip', 'Oxford, Butterfly',
  'Big flower', 'Mango tulip', 'Purple tulip', 'Purple prisia', 'White Lanumculus', 'Pink Lanumculus',
  'Purple hydrange', 'Yellow rose', 'Blue rose', 'Lavenderace rose', 'delphinium', 'Blue hydrangea',
  'Calla', 'Pink hydrange', 'Yellow, Pink rose', 'Mixed flower', 'Mini rose', 'Green hydrange',
  'sunflower', 'chrysanthemum', 'White Chrysanthemum', 'Purple globe amaranth', 'Red globe amaranth', 'Pink Patrinia scabiosaefolia',
  'Pink Patrinia scabiosaefolia', 'Yellow Patrinia scabiosaefolia', 'Pink dahlia', 'burgundy dahlia', 'Orange dahlia', 'Cosmos',
  'Cotton flower', 'Stoke'
];
var flowerimg = ["spring1.png", "spring2.png", "spring3.jpg", "spring4.jpg", "spring5.jpeg", "spring6.jpeg",
  "spring7.jpeg", "spring8.jpg", "spring9.jpeg", "spring10.jpg", "spring11.jpg", "spring12.png",
  "summer1.jpg", "summer2jpeg", "summer3.jpeg", "summer4.jpeg", "summer5.jpeg", "summer6.jpeg",
  "summer7.jpeg", "summer8.jpeg", "summer9.jpeg", "summer10.jpeg", "summer11.jpeg", "summer12.jpeg",
  "fall1.jpg", "fall2jpg", "fall3.jpg", "fall4.jpg", "fall5.jpg", "fall6.jpg",
  "fall7.jpg", "fall8.jpg", "fall9.jpg", "fall10.jpg", "fall11.jpeg", "fall12.jpg",
  "winter1.jpg", "winter2.jpg", "winter2.jpg", "winter9.jpg"
];

var flowerprice = ['25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
  '17 $', '20 $', '20 $', '25 $', '20 $', '20 $',
  '25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
  '20 $', '25 $', '20 $', '25 $', '20 $', '30 $',
  '25 $', '35 $', '20 $', '25 $', '30 $', '20 $',
  '20 $', '25 $', '20 $', '25 $', '20 $', '30 $',
  '25 $', '30 $', '30 $', '20 $'
];
var conflowername = ['camomile', 'Papiopedilloom', 'Gongjakcho', 'prisia',
  'Carnation', 'Pink hydrange', 'Cotton', 'Buque'
];
var conflowerimg = ["contex1.jpg", "contex2.jpg", "contex3.png", "contex4.jpg",
  "contex5.jpg", "contex6.jpg", "contex7.jpg", "contex8.jpg",
];
var conprice = ['25000 won', '35000 won', '20000 won', '25000 won',
  '30000 won', '20000 won', '70000 won', '20000 won'
];

// export { flowername, flowerimg, flowerprice, conflowername, conflowerimg, conprice }; //export

function cart() {
  var Html = "";

  for (var i = 0; i < 10; i++) {
    var tr_num = i + 1;
    var flower_tr = document.createElement('tr'); //create tr
    flower_tr.setAttribute('id', 'tr' + i); //tr id set
    document.getElementById('flower_body').appendChild(flower_tr);
    //create tr
    //create td
    var flower_check = document.createElement('td');
    flower_check.innerHTML = "<input type='checkbox' class='check'>"
    flower_tr.appendChild(flower_check);

    var flower_td1 = document.createElement('td'); //create td
    flower_td1.innerHTML = "<img src='" + flowerimg[i] + "' alt='flower image' style='width:12em;'>"
    flower_tr.appendChild(flower_td1);

    flower_td2 = document.createElement('td') //create td name
    flower_td2.setAttribute('id', 'flower_td_name' + i); //id name
    flower_td2.setAttribute('class', 'flower_td_name'); //class name
    flower_td2.innerHTML = flowername[i]; //flower name
    flower_tr.appendChild(flower_td2);

    flower_td3 = document.createElement('td') //create td price
    flower_td3.setAttribute('id', 'flower_td_price' + i); //id price
    flower_td2.setAttribute('class', 'flower_td_price'); //class price
    flower_td3.innerHTML = flowerprice[i]; //flower price
    flower_tr.appendChild(flower_td3);

    flower_num = document.createElement('td');
    flower_num.setAttribute('id', 'flower_num' + i);
    flower_td2.setAttribute('class', 'flower_num'); //class num
    num_form = document.createElement('form');
    flower_num.innerHTML = '<form> <input class="btn1" type = button value = "-" onclick = "minus(' + i + ')"><input class="btn1" type=text name=amount value=1 id = "count' + i + '" ><input class="btn1" type=button value="+" onclick="plus(' + i + ')"></form>';
    flower_tr.appendChild(flower_num);
  }
}
var checkbox_clicked = 0;
/* select, deselect all checkboxes */
function select_all() {
  if (checkbox_clicked == 0) {
    checkbox_clicked = 1;
    var checkbox = document.getElementsByClassName('check');
    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = true;
    }

  } else if (checkbox_clicked == 1) {
    checkbox_clicked = 0;
    var checkbox = document.getElementsByClassName('check');
    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = false;
    }
  }
}

function plus(num) {
  var count = Number(document.getElementById("count" + num).value);
  count++;
  document.getElementById("count" + num).value = count;
}

function minus(num) {
  var count = Number(document.getElementById("count" + num).value);
  count--;
  if (count < 0) {
    alert("Please select at least 0");
    count = 0;
  }
  document.getElementById("count" + num).value = count;
}

function cart_purchase() {
  var sum = 0;
  var selected_flowers = "";
  var checkbox = document.getElementsByClassName('check');
  for (var i = 0; i < checkbox.length; i++) {
    var count = document.getElementById("count" + i).value;
    if (checkbox[i].checked == true && count > 0) {
      sum += count * parseInt(flowerprice[i]);
      selected_flowers += count + " " + flowername[i] + ", "
    }
  }
  if (sum > 0) {
    alert("You selected \n\n" + selected_flowers + "\n----------------\n" + sum + "$");
  } else {
    alert("You selected nothing!");
  }
}

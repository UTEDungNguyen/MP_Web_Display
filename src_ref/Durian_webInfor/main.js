// Hàm để lấy giá trị của một tham số từ URL
function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// Lấy giá trị của tham số "custom_param" từ URL
const customParamValue = getQueryParam('custom_param');

// Hiển thị giá trị của tham số "custom_param" lên trang web
// const customParamElement = document.createElement('p');
// customParamElement.textContent = 'Giá trị của tham số custom_param là: ' + customParamValue;
// document.body.appendChild(customParamElement);



var valueDayExport = firebase.database().ref(customParamValue).child("key1");
valueDayExport.on("value", (snap) => {
  console.log("Day: " + snap.val());
  document.getElementById("day").innerHTML = snap.val();
});



// var valueOrgin = firebase.database().ref(customParamValue).child("orgin");
// valueOrgin.on("value", (snap) => {
//   console.log("the orgin: " + snap.val());
//   document.getElementById("orgin").innerHTML = snap.val() ;
// });

// var valueHum = firebase.database().ref(customParamValue).child("durian's name");
// valueHum.on("value", (snap) => {
//   console.log("durian's name: " + snap.val());
//   document.getElementById("name").innerHTML = snap.val() ;
// });
// // 
// var valueHum = firebase.database().ref(customParamValue).child("weight");
// valueHum.on("value", (snap) => {
//   console.log("trọng lượng: " + snap.val());
//   document.getElementById("weight").innerHTML = snap.val() ;
// });

// var valuepH = firebase.database().ref(customParamValue).child("type");
// valuepH.on("value", (snap) => {
//   console.log("Type: " + snap.val());
//   document.getElementById("type").innerHTML = snap.val() ;
// });

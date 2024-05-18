// Hàm để lấy giá trị của một tham số từ URL
function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// // Lấy giá trị của tham số "custom_param" từ URL
const customParamValue = getQueryParam('custom_param');

// // Hiển thị giá trị của tham số "custom_param" lên trang web
// const customParamElement = document.createElement('p');
// customParamElement.textContent = 'Giá trị của tham số custom_param là: ' + customParamValue;
// document.body.appendChild(customParamElement);

console.log("custom param value: " + customParamValue);

// $(document).ready(function(){
//   alert(1);
// });


var valueDayExport = firebase.database().ref(customParamValue).child("Date_Export");
valueDayExport.on("value", (snap) => {
  console.log("Day: " + snap.val());
  document.getElementById("date").innerHTML = snap.val();
});



var valueOrgin = firebase.database().ref(customParamValue).child("Orgin");
valueOrgin.on("value", (snap) => {
  console.log("the orgin: " + snap.val());
  document.getElementById("orgin").innerHTML = snap.val() ;
});

var valueName = firebase.database().ref(customParamValue).child("Name");
valueName.on("value", (snap) => {
  console.log("durian's name: " + snap.val());
  document.getElementById("name").innerHTML = snap.val() ;
});
// // 
var valueWeight = firebase.database().ref(customParamValue).child("Weight");
valueWeight.on("value", (snap) => {
  console.log("trọng lượng: " + snap.val());
  document.getElementById("weight").innerHTML = snap.val() ;
});

var valueType = firebase.database().ref(customParamValue).child("Type");
valueType.on("value", (snap) => {
  console.log("Type: " + snap.val());
  document.getElementById("type").innerHTML = snap.val() ;
});


// Reference to a specific image file
const storageRef = storage.ref();
const imgRef = storageRef.child(customParamValue +".JPG");

// Get the download URL
imgRef.getDownloadURL().then((url) => {
    // Insert url into an <img> tag to display the image
    const imgElement = document.getElementById('IMG');
    imgElement.src = url;
}).catch((error) => {
    console.error("Error getting download URL:", error);
});
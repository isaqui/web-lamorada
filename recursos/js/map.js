function initGoogleMap(){
  const location={lat:-17.76408,lng:-63.15899};
  const map=new google.maps.Map(document.getElementById('map'),{
    zoom:17,
    center:location,
    scrollwheel:false,
    mapTypeId:google.maps.MapTypeId.TERRAIN
  });
  new google.maps.Marker({position:location,map});
}
window.initGoogleMap=initGoogleMap;

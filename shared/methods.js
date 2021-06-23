export default {
  convertMinsToHrsMins(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;

    if( h < 1 ) {
      return `${m} min`
    }else{
      return `${h} hour  ${m} min`
    }
},
 numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
} 
}

 
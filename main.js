
function formattedPhone(phone) {
    let str = "";
    for (var i = 0; i < 12; i++) {
        if (i<2){
            str+=phone.charAt(i);
        }
        if (i==2) {
            str+=" (";
            str+=phone.charAt(i);
        }
        if((i>2)&&(i<5)) {
            str+=phone.charAt(i);
        }
        if (i==5) {
            str+=") ";
            str+=phone.charAt(i);
        }
        if((i>5)&&(i<8)) {
            str+=phone.charAt(i);
        }
        if (i==8){
            str+="-";
            str+=phone.charAt(i);
        }
        if((i>8)&&(i<10)) {
            str+=phone.charAt(i);
        }
        if (i==10){
            str+="-";
            str+=phone.charAt(i);
        }
        if((i>10)&&(i<12)) {
            str+=phone.charAt(i);
        }


    }
    console.log (str);
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90

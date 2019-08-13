import $ from 'jquery';
// import buildPDF from './pdf';


export function callPdf() {
    alert('here')
}

(<any>window).callPdf = callPdf;


$(document).ready(function(){

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.text = "buildPDF();";
    // window.document.body.append(s);

    // $('#btn_pdf').click(function(){
    //     buildPDF();
    // });

});

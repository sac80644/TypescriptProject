import $ from 'jquery';
import * as pdf from './pdf';


(<any>window).callPdf = pdf.buildPDF;


$(document).ready(function(){

    $('#btn_pdf').click(function(){
        pdf.buildPDF();
    });

});

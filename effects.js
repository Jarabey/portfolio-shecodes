import { annotate } from 'https://unpkg.com/rough-notation?module';

const frontDev = document.querySelector('.front')
const annotation = annotate(frontDev, { type: 'highlight' , color:'#dcb5ff'});
annotation.show();

const graphicdes = document.querySelector('.graphic')
const annotationGraphic = annotate(graphicdes, { type: 'underline' , color:'#d9f2ff'});
annotationGraphic.show();

const python = document.querySelector('.dev')
const annotationpython = annotate(python, { type: 'highlight' , color:'#dcb5ff'});
annotationpython.show();

const design = document.querySelector('.desg')
const annotationdesign = annotate(design, { type: 'underline' , color:'#d9f2ff'});
annotationdesign.show();

const frontEnd = document.querySelector('.end')
const annotationEnd = annotate(frontEnd, { type: 'underline' , color:'#77529e', weight:1});
annotationEnd.show();

const job = document.querySelector('.hire')
const annotationHire = annotate(job, { type: 'circle' , color:'#fcf8f3', weight:1});
annotationHire.show();
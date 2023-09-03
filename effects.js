import { annotate } from 'https://unpkg.com/rough-notation?module';

const frontDev = document.querySelector('.front')
const annotation = annotate(frontDev, { type: 'highlight' , color:'pink'});
annotation.show();
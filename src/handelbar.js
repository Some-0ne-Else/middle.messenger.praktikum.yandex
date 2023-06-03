import Handlebars from 'handlebars';
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

console.log(template({ name: "Nils11" }));

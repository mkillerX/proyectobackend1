var express = require('express');
var app1 = express();
var app2 = express();
var faker = require('faker');
var rand = require('lodash');

var generarUsuario = function(){
  var randomID = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomCont = faker.lorem.sentence();
  var randomFecha = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    ID: randomID,
	nombre: randomName,
	contenido : randomCont,
    fecha: randomFecha,
    imagen: randomImage
  }

}


app1.get('/endpoint1', function (req, res) {
  var cantidad = rand.random(4,10)
  var usuarios = rand.times(cantidad, generarUsuario)
  res.json(usuarios);
})




app1.listen(3000);


app2.get('/endpoint2', function (req, res) {
  var cantidad = rand.random(3,6)
  var usuarios = rand.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app2.listen(3001)

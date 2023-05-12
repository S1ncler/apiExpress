// crear o usar una base de datos existente
// dropdatabase elimina una base de datos
// use("PokemondongoDb")

// // crear una coleccion
// db.createCollection("pokemondongoss")
// db.createCollection("status")

// se miran las estadisticas de la base de datos
// db.stats()

// ver cual base de datos que se esta usando
// db

// eliminar una base de datos
// db.dropDatabase()

// OPERACIONES CRUD

// CREATE puede ser insertMany o insertOne
// documento
// insertar uno
// db.characters.insertOne({
//     name: "Son Goku",
//     species: "Saiyan",
//     age: "48",
//     gender: "Male"
// })
// insertar varios
// db.characters.insertMany(
//     [
//         {
//             name: "Son Gohan",
//             species: "Saiyan",
//             age: 23,
//             gender: "Male"
//         },
//         {
//             name: "Pan",
//             species: "Saiyan",
//             age: 3,
//             gender: "Female"
//         },
//         {
//             name: "Piccolo",
//             species: "Namekian",
//             age: 82,
//             gender: "Male"
//         }
//     ]
// )

// READ
// db.characters.find()
// db.characters.find({name: "Pan", age: 3})
// db.characters.find({species: "Saiyan"})

//OPERADORES MONGO
// == => $eq,  != => $ne,  > => $gt,  < => $lt,  >= => $gte
// <= => lte,  && => $and,  || => $or,  ! => $not
// { $or:[{con}, {con}]}

// db.characters.find({species: {$eq: "Namekian"}})
// db.characters.findOne({species: {$eq: "Namekian"}})
// db.characters.find(
//     {
//         species: { $eq: "Saiyan" },
//         age: { $lt: 70 },
//         gender: { $eq: "Male" }
//     })

// UPDATE
// la condicion, sentencia de actualizaion $set(establece informacion) $unset(borra informacion)
// $max(establece un numero maximo de actualiaciones) $setOrInsert(actualiza o crea si no existe)
// $min(establece un numero minimo de actualizaciones)
// updateMany actualiza varios, update solo 1

// db.characters.update(
//     {
//         name: {$eq: "Son Gohan"}
//     },
//     {
//         $set: {age: 24}
//     }
// )
// db.characters.find({name: {$eq:"Son Gohan"}})
// db.characters.updateMany(
//     {},
//     {
//         $rename: {edad: "age"}
//     }
// )

// db.characters.updateMany(
//     {},
//     {$set: {age: 23}}
// )

// db.characters.updateMany(
//     {},
//     {
//         $unset: {age: ""}
//     }
// )

// db.characters.updateMany(
//     {},
//     {$set: {transformation: "Normal State"}}
// )

// db.characters.updateMany(
//     {species: {$eq: "Saiyan"}},
//     {$set: {transformation: {
//         $expr: "Super Saiyan 1"
//     }}}
// )

// db.characters.find(
//     {$or: [
//         {name: {$eq: "Son Goku"}},
//         {name: {$eq: "Son Gohan"}}
//     ]}
// )

//DELETE
// detelMany para varios o delete para uno
// db.characters.deleteMany(
//     {gender: {$eq: "Female"}}
// )

//db.characters.find({})

// // crear una coleccion
// db.createCollection("pokemondongoss")
//db.pokemons.renameCollection("pokemondongos")
use("PokemondongoDb");

// Punto 1
// db.pokemondongos.find(
//   {
//     $or: [{ type: { $eq: "Grass" } }, { type: { $eq: "Poison" } }],
//   },
//   { name: 1, _id: 0 }
// );

// Punto 2
// db.pokemondongos.find(
//     {$or: [
//         { 'stats.hp': { $gt: 40 } },
//         { 'stats.attack': { $gt: "62"} },
//         { 'stats.defense': { $gt: "60"} }
//     ]},
//     { name: 1, _id: 0 }
// )

// Punto 3
// db.pokemondongos.find(
//     { type: { $eq: "Dragon" } }
//     , { name: 1, _id: 0 }
// );

// Punto 4
// db.pokemondongos.find(
//     {$and: [
//         { 'damages.ice': {$eq: "1"}},
//         { 'damages.grass': {$eq: "0.5"}}
//     ]},
//     {name: 1, _id: 0}
// )

// Punto 5
// db.pokemondongos.find(
//     { 'misc.sex.male': {$gt: "74"} },
//     {name:1, _id: 0}
// )
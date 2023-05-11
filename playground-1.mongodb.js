// crear o usar una base de datos existente
use("DBZ-V2")

// crear una coleccion
// db.createCollection("characters")
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


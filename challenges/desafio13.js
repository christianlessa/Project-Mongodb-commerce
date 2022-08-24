db.produtos.updateMany({
  nome: { $nin: ["BobsBurguer"] } },
  { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });
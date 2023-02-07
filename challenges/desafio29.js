db.produtos.updateMany(
  {},
  {
    $rename: {
      descricao: "descricaoSite",
    },
  },
  );

db.produtos.find(
  {},
  {
    _id: 0,
    descricaoSite: 1,
    nome: 1,
  },
  );
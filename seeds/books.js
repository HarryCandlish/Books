exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          id: 1,
          user_id: 1,
          title: "Demons",
          author: "F.Dostoevsky",
          written: "1856",
          description: "murder in Russia",
          category: "philosophical",
          date: "17/05/19",
          read: true,
          reading: false,
          image: "/#"
        },
        {
          id: 2,
          user_id: 1,
          title: "The Clown",
          author: "F.Boll",
          written: "1945",
          description: "A clown living in Germany",
          category: "sociological",
          date: "17/05/19",
          read: false,
          reading: true,
          image: "/#"
        },
        {
          id: 3,
          user_id: 1,
          title: "Tropic of Cancer",
          author: "H.Miller",
          written: "1921",
          description: "Man walking about Paris",
          category: "autobiographical",
          date: "17/05/19",
          read: true,
          reading: true,
          image: "/#"
        }
      ]);
    });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('users').truncate()
  //   .then(function () {
  // Inserts seed entries
  return knex("users").insert([
    { username: "user1", password: "123456" },
    { username: "user2", password: "123456" },
    { username: "user3", password: "123456" },
  ]);
};

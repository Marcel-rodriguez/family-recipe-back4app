const db = require("../data/db-config");

function findAll() {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .select("r.recipe_name", "c.category_name", "s.source_name");
}

function findById(id) {
  return db("recipes as r")
    .leftJoin("categories as c", "r.category_id", "c.category_id")
    .leftJoin("sources as s", "r.source_id", "s.source_id")
    .select("r.recipe_name", "c.category_name", "s.source_name")
    .where("r.recipe_id", id)
    .first();
}

async function add(newRecipe) {
    const [added] = await db('recipes').insert(newRecipe, ['recipe_name'])  
    return added
}



const deleteById = id => db("recipes").where({ id }).del()

module.exports = { findAll, findById, add, deleteById };

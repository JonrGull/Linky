/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      link: "https://www.youtube.com/watch?v=fYq5PXgSsbE",
      tags: '["web","dev","english","flexbox", "css"]',
      description: "This really helped me improve my flexbox skills!",
    },
    {
      link: "https://www.youtube.com/watch?v=d5E2AQKuCyU",
      tags: '["philosophy","stoicism","education", "marcus-aurelius"]',
      description: "How to live the good life",
    },
    {
      link: "https://www.youtube.com/watch?v=V3GJycgu-cs",
      tags: '["funny","cat","fall","crash"]',
      description: "I watch this video any time I am feeling down",
    },
  ]);
};

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;

const githubData = {
  login: "Erecto-Accio",
  id: 83619372,
  node_id: "MDQ6VXNlcjgzNjE5Mzcy",
  avatar_url: "https://avatars.githubusercontent.com/u/83619372?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Erecto-Accio",
  html_url: "https://github.com/Erecto-Accio",
  followers_url: "https://api.github.com/users/Erecto-Accio/followers",
  following_url:
    "https://api.github.com/users/Erecto-Accio/following{/other_user}",
  gists_url: "https://api.github.com/users/Erecto-Accio/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Erecto-Accio/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Erecto-Accio/subscriptions",
  organizations_url: "https://api.github.com/users/Erecto-Accio/orgs",
  repos_url: "https://api.github.com/users/Erecto-Accio/repos",
  events_url: "https://api.github.com/users/Erecto-Accio/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Erecto-Accio/received_events",
  type: "User",
  site_admin: false,
  name: "Tousif Tasrik",
  company: "The International University of Scholars",
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-05-03T23:41:07Z",
  updated_at: "2024-03-26T14:47:59Z",
};

app.get("/", (req, res) => {
  res.send("Hello,World");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${port}`);
});

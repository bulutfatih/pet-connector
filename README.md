# Pet Connector

> Social network for pet owners

Tech stack: Node.js, Express.js, React.js, MongoDB

Live Demo: https://floating-temple-25916.herokuapp.com/
You can create a new account or use this demo account
Email: test@test.com
Password: 123456

# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

Check in browser on [http://localhost:3000/](http://localhost:3000/)

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

---

## App Info

### Author

Fatih Bulut

### License

This project is licensed under the MIT License

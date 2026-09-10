{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/login\\.html",
      "dest": "/login.html"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}

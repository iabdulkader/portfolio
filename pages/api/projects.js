// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const projectsList = [
    {
      name: "joShare | File Sharing App",
      description: "joShare is a simple and efficient file sharing app authenticating users with PIN. Checkout for more features.",
      url: "https://joshare.xyz",
      github: "https://github.com/iabdulkader/joshare-frontend",
      stack: ["akar-icons:nextjs-fill", "simple-icons:express", "simple-icons:mongodb", "simple-icons:vercel", "simple-icons:firebase"],
      index: 0
    },
    {
      name: "A Link | URL Shortner",
      description: "Easy, Simple, Fast, Efficient, Powefull URL Shortner App with API support.",
      url: "https://alink.gq",
      github: "https://github.com/iabdulkader/url-shortner",
      stack: ["akar-icons:nextjs-fill", "simple-icons:react", "simple-icons:vercel", "simple-icons:mongodb"],
      index: 1
    },
    {
      name: "jobin | Pastebin",
      description: "jobin is a pastebin like web app. It's very simple and fast. Comes with API support.",
      url: "https://jobin-9yiv.onrender.com",
      github: "https://github.com/iabdulkader/jobin",
      stack: ["simple-icons:express", "simple-icons:heroku", "simple-icons:mongodb", "file-icons:ejs"],
      index: 2
    },
    {
      name: "1337x Torrent Search API",
      description: "Unofficial 1337x Torrent Search Api. For more info read Docs.",
      url: "https://1337x-api.vercel.app/docs",
      github: "https://github.com/iAbdulKader/1337x-torrent-serach-api",
      stack: ["simple-icons:express", "simple-icons:vercel", "simple-icons:swagger"],
      index: 3
    },
  ];

export default function handler(req, res) {
  res.status(200).json(projectsList)
}

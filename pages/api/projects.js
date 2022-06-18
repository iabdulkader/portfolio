// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const projectsList = [
    {
      name: "joShare | File Sharing App",
      description: "joShare is a simple and efficient file sharing app authenticating users with PIN. Checkout for more features.",
      url: "https://joshare.ml",
      stack: ["logos:nextjs-icon", "simple-icons:express", "simple-icons:mongodb", "simple-icons:vercel", "simple-icons:firebase"],
      index: 1,
      img: "/joshare.png"
    },
    {
      name: "A Link | URL Shortner",
      description: "Easy, Simple, Fast, Efficient, Powefull URL Shortner App with API support.",
      url: "https://alink.gq",
      stack: ["logos:nextjs-icon", "simple-icons:react", "simple-icons:vercel", "simple-icons:mongodb"],
      index: 2,
      img: "/aklink.png"
    },
    {
      name: "jobin | Pastebin",
      description: "jobin is a pastebin like web app. It's very simple and fast. Comes with API support.",
      url: "https://jobin.tk",
      stack: ["simple-icons:express", "simple-icons:heroku", "simple-icons:mongodb", "file-icons:ejs"],
      index: 3,
      img: "/jobin.png"
    },
    {
      name: "1337x Torrent Search API",
      description: "Unofficial 1337x Torrent Search Api. For more info read Docs.",
      url: "https://1337x-api.vercel.app/docs",
      stack: ["simple-icons:express", "simple-icons:vercel", "simple-icons:swagger"],
      index: 4,
      img: "/jobin.png"
    },
  ];

export default function handler(req, res) {
  res.status(200).json(projectsList)
}

import http from "http"

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("<h1>Welcome to Backend Development</h1>")
    }else if (req.url === "/about" && req.method === "GET") {
        res.end(JSON.stringify({
            message: "This is about page"
        }))
    }else if (req.url === "/contact" && req.method === "GET") {
        res.end("<h1>This is contact page</h1>")
    }else if (req.url === "/home" && req.method === "GET") {
        res.end("<h1>This is home page</h1>")
    }else {
        res.end("<h1>404 page not found</h1>")
    }
})

const PORT = 3000

server.listen(PORT, () => {
    console.log("server is created ",PORT)
})
const http = require("http");
const express = require("express");

const app = express();

app.listen(3001, function () {
  console.log("Hi");
});

app.get("/", function (req, resp) {
  resp.send(
    `<html>
      <head>
        <meta charset="utf-8"></head>
        <body>
          <h1> Casa do Código </h1>
        </body>
      </html> 
    </html>`
  );
});

app.get("/livros", function (req, resp) {
    resp.send(
      `<html>
        <head>
          <meta charset="utf-8"></head>
          <body>
            <h1> Lista </h1>
          </body>
        </html> 
      </html>`
    );
  });

// const server = http.createServer(function (req, resp) {

//     let html = '';
//     if (req.url == '/'){

//         html = `
//           <html>
//               <head>
//                   <meta charset="utf-8">
//               </head>
//               <body>
//                   <h1> Casa do Código </h1>
//               </body>
//           </html>
//       `;
//     } else if (req.url == '/livros') {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Listagem de Livros </h1>
//             </body>
//         </html>
//     `;
//     }
//     resp.end(html);
// });
// server.listen(3000);

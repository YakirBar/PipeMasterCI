const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8051;

const decodeHtmlEntities = (str) => {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (request, response) => {
    const content = process.env.CONTENT || '<h1>Content not recognized</h1>';
    const decodedContent = decodeHtmlEntities(content);

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="/favicon.ico" />
            <title>Virtual Site</title>
            <style>
                body {
                    background-color: #f9f7f3;
                    margin: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-image: url('your-background-image.jpg'); /* Optional background image */
                    background-size: cover;
                    background-position: center;
                }

                div {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    width: 100%;
                    box-sizing: border-box;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                div:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                h1 {
                    font-size: 2.5em;
                    margin: 0 0 20px;
                    color: #0fa3b1;
                }

                p {
                    font-size: 1.2em;
                    line-height: 1.6;
                    color: #0fa3b1;
                }

                a {
                    color: #0fa3b1;
                    text-decoration: none;
                    font-weight: bold;
                }

                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div>
                ${decodedContent}
                <p>Check out the GitHub Actions for this project:</p>
                <p><a href="https://github.com/YakirBar/PipeMasterCI/actions" target="_blank">https://github.com/YakirBar/PipeMasterCI/actions</a></p>
            </div>
        </body>
        </html>
    `;

    response.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Virtual site listening on port ${port}`);
});
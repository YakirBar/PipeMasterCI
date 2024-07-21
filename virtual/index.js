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
    const content = process.env.CONTENT || '<h1>Content not recognized</h1><p>Additional content can be placed here.</p>';
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
                    background-color: #BFBDC1;
                    margin: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-image: url('your-background-image.jpg'); /* Optional background image */
                    background-size: cover;
                    background-position: center;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .card {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    width: 100%;
                    box-sizing: border-box;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    margin-bottom: 20px; /* Space between card and links */
                }

                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                h1 {
                    font-size: 2.0em;
                    margin: 0 0 20px;
                    color: #95C623;
                }

                p {
                    font-size: 1.2em;
                    line-height: 1.6;
                    color: #95C623;
                }

                a {
                    color: #95C623;
                    text-decoration: none;
                    font-weight: bold;
                }

                a:hover {
                    text-decoration: underline;
                }

                .links {
                    margin-top: 20px;
                }

                .links p {
                    font-size: 1em;
                    line-height: 1.4;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="card">
                    ${decodedContent}
                </div>
                <div class="links">
                    <p>Check out the GitHub Actions for this project:</p>
                    <p><a href="https://github.com/YakirBar/PipeMasterCI/actions" target="_blank">https://github.com/YakirBar/PipeMasterCI/actions</a></p>
                    <p>Check out the DockerHub Registry for this project:</p>
                    <p><a href="https://hub.docker.com/r/yakirbartech/pipemasterci/tags" target="_blank">https://hub.docker.com/r/yakirbartech/pipemasterci/tags</a></p>
                </div>
            </div>
        </body>
        </html>
    `;

    response.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Virtual site listening on port ${port}`);
});
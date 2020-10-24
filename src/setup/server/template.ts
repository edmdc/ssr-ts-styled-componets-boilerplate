export default function template(body: string, head: string, styles: string) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${head}
        ${styles}
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="./js/client.js"></script>
        <script src="./js/vendor.js"></script>
      </body>
    </html>
  `
}

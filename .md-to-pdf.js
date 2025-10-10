module.exports = {
  pdf_options: {
    format: "A4",
    margin: {
      top: "20mm",
      right: "20mm",
      bottom: "20mm",
      left: "20mm",
    },
  },
  stylesheet:
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  puppeteer_launch_options: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};

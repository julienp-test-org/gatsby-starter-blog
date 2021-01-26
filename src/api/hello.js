export default async (req, res) => {
  const response = await fetch(`https://google.com`)
  console.log({ status: response.status })
  let body = ""
  if (response) {
    body = await response.text()
  }

  const dogImage = await fetch("https://dog.ceo/api/breeds/image/random")
  const dogJson = await dogImage.json()

  const name = req.query.name
  res.status(200).send({
    value: `Hello, ${name}!`,
    status: response.status,
    dog: dogJson,
    body: body.slice(0, 100),
    request: {
      path: req.path,
      query: req.query,
      params: req.params,
      hostname: req.hostname,
      headers: JSON.stringify(req.headers),
    },
  })
}

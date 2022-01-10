const usuariosGet = (req, res) => {
  res.json({
    body: req.body,
    msg: 'Post controller',
  })
}

module.exports = {
  usuariosGet,
}
const { Url } = require("../models");
const { randomInt } = require('crypto');
const { url } = require("inspector");



createUrl = async (req, res) => {
  const longUrl = req.body.longUrl
  const urlCode = randomInt(100000, 999999);
  const baseUrl = "http://localhost:4321"
  try {
    let url = await Url.findOne({ longUrl })
    let shortUrl = baseUrl + "/url/" + urlCode

    url = new Url({
      user:req.body.user,
      urlCode:urlCode,
      longUrl:longUrl,
      shortUrl,
      date: new Date()
    })

    await url.save()
    return res.status(200).json({ data: url, })
  }
  catch (err) {
    console.log(err)
  }
  return res.end()
}

getUrls = async (req, res) => {
  const page = req.query.page - 1
  const userId = req.query.userId
  if (userId) {
    const result = await Url.find({user: userId}).limit(5).skip(page * 5)
    return res.send(result)
  } 
  res.sendStatus(404)
}
getUrl = async (req, res) => {
  const uid = req.params.id;
  if (uid) {
    console.log(uid)
    const result = await Url.find({urlCode:uid});
    console.log(result[0].longUrl)
    return res.writeHead(301,{
      Location:result[0].longUrl
    }).end()
  }
  res.sendStatus(404);
}



module.exports = { createUrl, getUrl , getUrls };
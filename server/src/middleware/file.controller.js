/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const uploadFile = require("./upload");

// subir fotos
const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      console.log('1234')
        return res.status(400).send({ message: "请选择要上传的文件" });
    }
    res.status(200).send({
      message: "图片上传成功: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err)
      // Check imagen size
      // LIMIT_FILE_SIZE 文件超限错误
      if (err.code == "LIMIT_FILE_SIZE") {
        console.log('ddd')
        return res.status(500).send({
          message: "文件大小不能超过 2MB",
        });
    }
    res.status(500).send({
      message: `无法图片上传: ${req.file.originalname}. ${err}`,
    });
  }
};

// Leer nombre y su url
const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "没有找到文件。",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};

// Para obtener informacion
const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "无法获取文件。" + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};
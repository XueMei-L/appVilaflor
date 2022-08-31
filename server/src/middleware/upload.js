/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

// Limita el tamaño
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

console.log(uploadFile);

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

// 导入 multer 模块。
// 配置 multer 为磁盘存储引擎。
// destination：指向用于存储图片上传的文件夹。
// filename：图片上传上传后的文件名。
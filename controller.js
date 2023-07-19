const path = require('path');
const Resize = require('./root/Resize');

// async function uploadImage(req, res) {
//   // folder upload
//   const imagePath = path.join(__dirname, '/public/images');
//   // call class Resize
//   const fileUpload = new Resize(imagePath);
//   if (!req.file) {
//     return res.status(401).json({ error: 'Please provide an image' });
//   }
//   const filename = await fileUpload.save(req.file.buffer);
  
//   return res.status(200).json({ name: filename });
// }

const uploadImage = async (req, res) => {
    // folder upload
  const imagePath = path.join(__dirname, '/public/images');
  // call class Resize
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    return res.status(401).json({ error: 'Please provide an image' });
  }
  const filename = await fileUpload.save(req.file.buffer);
  
  return res.status(200).json({ name: filename });
}

module.exports = {
  uploadImage,
};

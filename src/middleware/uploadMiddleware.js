import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "internship-test/applications",
    format: async () => "jpg",
    public_id: (req, file) => {
      const timestamp = Date.now();
      const userId = req.user?.id || "anonymous";
      return `application_${userId}_${timestamp}`;
    },
  },
});

const upload = multer({ storage });

export { upload };

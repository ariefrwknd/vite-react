import { glob } from "glob";
import imagemin from "imagemin";
import webp from "imagemin-webp";

const blob = "build_deploy/**/*.{jpg,JPG,jpeg,JPEG,png}";

const convertImage = async (input, output) => {
  const files = await imagemin([input], {
    destination: output,
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  files.map((file) => {
    console.log(`✅ ${file.destinationPath} `);
  });
};

const convertAllImages = () => {
  console.log(`Converting all images...`);
  glob(blob, function (er, files) {
    files.map((file) => {
      const input = file;
      const output = file.substring(0, file.lastIndexOf("/")) + "/";
      convertImage(input, output);
    });
  });
};

convertAllImages();

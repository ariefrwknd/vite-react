import { glob } from "glob"
import imagemin from "imagemin"
import mozJpeg from "imagemin-mozjpeg"
import optiPNG from "imagemin-optipng"
import gifSicle from 'imagemin-gifsicle'
import svgo from "imagemin-svgo";

const blob = "build_deploy/**/*.{jpg,JPG, jpeg, JPEG, png, svg, gif}"

const compressImage = async (input, output) => {
  const files = await imagemin([input], {
    destination: output,
    plugins: [
      mozJpeg({
        quality: 82,
      }),
      optiPNG({ optimizationLevel: 4 }),
      svgo(),
      gifSicle()
    ]
  })

  files.map((file) => {
    console.log(`✅ ${file.sourcePath} `);
  });
}

const compressAllImages = () => {
  console.log(`Compressing all images...`)
  glob(blob, async function (er, files) {
    for (const file of files) {
      const input = file
      const output = file.substring(0, file.lastIndexOf("/")) + "/";

      try {
        await compressImage(input, output)
      } catch (error) {
        console.log(error)
      }
    }
  })
}

compressAllImages()

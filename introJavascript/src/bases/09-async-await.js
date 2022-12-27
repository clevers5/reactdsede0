const getImagePromesa = new Promise((resolve, reject) => {
  resolve(
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  );
});

getImagePromesa.then(console.log);

const getImage = async () => {
  try {
    const apiKey = "wnXFhOIPCOpM5w64bNUnvJmk8bPDBjNX";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getImage();

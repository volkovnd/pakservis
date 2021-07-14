const loadFonts = () => {
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,400i,500,700:cyrillic,latin"],
      },
    });
  });
};

export default function () {
  loadFonts();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  // Image layers
  let imageContainer = document.getElementById("js-image-container");
  let typeLayer = document.getElementById("js-type");
  let toneLayer = document.getElementById("js-tone");
  let hairLayer = document.getElementById("js-hair");
  let eyeLayer = document.getElementById("js-eyes");
  let blemishLayer = document.getElementById("js-blemish");
  let mouthLayer = document.getElementById("js-mouth");
  let beardLayer = document.getElementById("js-beard");
  let propLayer = document.getElementById("js-prop");

  let modLayers = [
      typeLayer,
      toneLayer,
      blemishLayer,
      hairLayer,
      eyeLayer,
      mouthLayer,
      beardLayer,
      propLayer,
  ];

  let typeOptions = document.getElementById("js-type-options");
  let toneOptions = document.getElementById("js-tone-options");
  let hairOptions = document.getElementById("js-hair-options");
  let eyeOptions = document.getElementById("js-eye-options");
  let mouthOptions = document.getElementById("js-mouth-options");
  let blemishOptions = document.getElementById("js-blemish-options");
  let beardOptions = document.getElementById("js-beard-options");
  let propOptions = document.getElementById("js-prop-options");

  let wrappers = [
      typeOptions,
      toneOptions,
      hairOptions,
      eyeOptions,
      mouthOptions,
      blemishOptions,
      beardOptions,
      propOptions,
  ];

  wrappers.forEach(classToggle);
  wrappers.forEach(outputSource);

  // toggle active class on click
  function classToggle(wrapper) {
      console.log(wrapper);
      wrapper.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", (e) => {
              console.log("link clicked");
              e.preventDefault();

              var activeLink = wrapper.getElementsByClassName("is-active")[0];

              if (activeLink !== undefined) {
                  activeLink.classList.remove("is-active");
              }

              e.target.classList.add("is-active");
          });
      });
  }

  // clear all values on type change
  function clearVal() {
      imageContainer.querySelectorAll("img").forEach((img) => {
          img.setAttribute("src", "");
          img.setAttribute("data-name", "None");
      });
      wrappers.forEach((wrapper) => {
          wrapper.querySelectorAll('[data-name="None"]').forEach((optNone) => {
              optNone.setAttribute("class", "is-active");
          });
          if (wrapper.querySelector('.is-active:not([data-name="None"])')) {
              wrapper
                  .querySelector('.is-active:not([data-name="None"]')
                  .classList.remove("is-active");
          }
      });
  }

  // output attrs to canvas
  function outputSource(wrapper) {
      wrapper.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", (e) => {
              e.preventDefault();

              if (e.target.hasAttribute("src")) {
                  console.log(e.target.src);

                  // type
                  if (link.closest("#js-type-options")) {
                      clearVal();
                      typeLayer.setAttribute("src", e.target.src.split("net/").pop());
                      typeLayer.setAttribute("data-name", e.target.dataset.name);

                      if (e.target.dataset.name == "Male") {
                          toneLayer.setAttribute(
                              "src",
                              "img/attributes/Tone/male-light.png"
                          );
                          toneLayer.setAttribute("data-name", "Light");
                      } else {
                          toneLayer.setAttribute(
                              "src",
                              "img/attributes/Tone/female-light.png"
                          );
                          toneLayer.setAttribute("data-name", "Light");
                      }
                  }
                  // tone
                  else if (link.closest("#js-tone-options")) {
                      if (document.getElementById("js-tone").dataset.name == "Male") {
                          if (e.target.dataset.name == "Albino") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-albino.png"
                              );
                              toneLayer.setAttribute("data-name", "Albino");
                          }
                          if (e.target.dataset.name == "Light") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-light.png"
                              );
                              toneLayer.setAttribute("data-name", "Light");
                          }
                          if (e.target.dataset.name == "Mid") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-mid.png"
                              );
                              toneLayer.setAttribute("data-name", "Mid");
                          }
                          if (e.target.dataset.name == "Dark") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-dark.png"
                              );
                              toneLayer.setAttribute("data-name", "Dark");
                          }
                      }
                      if (document.getElementById("js-tone").dataset.name == "Female") {
                          if (e.target.dataset.name == "Albino") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-albino.png"
                              );
                              toneLayer.setAttribute("data-name", "Albino");
                          }
                          if (e.target.dataset.name == "Light") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-light.png"
                              );
                              toneLayer.setAttribute("data-name", "Light");
                          }
                          if (e.target.dataset.name == "Mid") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-mid.png"
                              );
                              toneLayer.setAttribute("data-name", "Mid");
                          }
                          if (e.target.dataset.name == "Dark") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-dark.png"
                              );
                              toneLayer.setAttribute("data-name", "Dark");
                          }
                      }
                  }
                  //hair
                  else if (link.closest("#js-hair-options")) {
                      hairLayer.setAttribute("src", "");
                      hairLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  // eye
                  else if (link.closest("#js-eye-options")) {
                      eyeLayer.setAttribute("src", "");
                      eyeLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  // mouth
                  else if (link.closest("#js-mouth-options")) {
                      mouthLayer.setAttribute("src", "");
                      mouthLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  //blemish
                  else if (link.closest("#js-blemish-options")) {
                      blemishLayer.setAttribute("src", "");
                      blemishLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  // beard
                  else if (link.closest("#js-beard-options")) {
                      beardLayer.setAttribute("src", "");
                      beardLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  // prop
                  else if (link.closest("#js-prop-options")) {
                      propLayer.setAttribute("src", "");
                      propLayer.setAttribute("src", e.target.src.split("net/").pop());
                  }
                  else {
                      return;
                  }
              } else {
                  console.log(e.target.dataset.color);
                  console.log("has no src");
                  if (link.closest("#js-tone-options") !== null) {
                      console.log(
                          "in tone options" +
                          "  " +
                          document.getElementById("js-tone").dataset.name
                      );
                      if (document.getElementById("js-type").dataset.name == "Male") {
                          console.log("selected is male");
                          if (e.target.dataset.name == "Albino") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-albino.png"
                              );
                              toneLayer.setAttribute("data-name", "Albino");
                          }
                          if (e.target.dataset.name == "Light") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-light.png"
                              );
                              toneLayer.setAttribute("data-name", "Light");
                          }
                          if (e.target.dataset.name == "Mid") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-mid.png"
                              );
                              toneLayer.setAttribute("data-name", "Mid");
                          }
                          if (e.target.dataset.name == "Dark") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/male-dark.png"
                              );
                              toneLayer.setAttribute("data-name", "Dark");
                          }
                      }
                      if (document.getElementById("js-type").dataset.name == "Female") {
                          if (e.target.dataset.name == "Albino") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-albino.png"
                              );
                              toneLayer.setAttribute("data-name", "Albino");
                          }
                          if (e.target.dataset.name == "Light") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-light.png"
                              );
                              toneLayer.setAttribute("data-name", "Light");
                          }
                          if (e.target.dataset.name == "Mid") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-mid.png"
                              );
                              toneLayer.setAttribute("data-name", "Mid");
                          }
                          if (e.target.dataset.name == "Dark") {
                              toneLayer.setAttribute(
                                  "src",
                                  "img/attributes/Tone/female-dark.png"
                              );
                              toneLayer.setAttribute("data-name", "Dark");
                          }
                      }
                  }
              }
          });
      });
  }

  // generate and download
  let genBtn = document.getElementById("js-generate");
  let saveBtn = document.getElementById("js-download");

  genBtn.addEventListener("click", genAndDownloadPFP, false);

  function genAndDownloadPFP(e) {
      e.preventDefault();
      let sources = [];
      // metadata
      modLayers.forEach(layer => {
          sources[layer.getAttribute('data-att')] = layer.getAttribute('data-name');
      })

      var typeSource,
      toneSource,
      blemishSource,
      hairSource,
      eyeSource,
      mouthSource,
      beardSource,
      propSource;

      if (typeLayer.getAttribute('src') !== '') {
          typeSource = typeLayer.getAttribute('src');
      }
      if (toneLayer.getAttribute('src') !== '') {
          toneSource = toneLayer.getAttribute('src');
      }
      if (blemishLayer.getAttribute('src') !== '') {
          blemishSource = blemishLayer.getAttribute('src');
      }
      if (hairLayer.getAttribute('src') !== '') {
          hairSource = hairLayer.getAttribute('src');
      }
      if (eyeLayer.getAttribute('src') !== '') {
          eyeSource = eyeLayer.getAttribute('src');
      }
      if (mouthLayer.getAttribute('src') !== '') {
          mouthSource = mouthLayer.getAttribute('src');
      }
      if (beardLayer.getAttribute('src') !== '') {
          beardSource = beardLayer.getAttribute('src');
      }
      if (propLayer.getAttribute('src') !== '') {
          propSource = propLayer.getAttribute('src');
      }

      let options = [typeSource,toneSource,blemishSource,hairSource,eyeSource,mouthSource,beardSource,propSource];
      var http = new XMLHttpRequest();
      http.open("POST", "wannabeMiner.php", true);
      http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      http.send(JSON.stringify(options));

      http.onreadystatechange = function () {
          if (http.readyState == 4 && http.status == 200) {
              let downloadLink = document.createElement('a');
              downloadLink.href = http.responseText;
              downloadLink.download = 'generated_image.png';
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
          } else {
              console.log(http.responseText);
          }
      };
  }

  document.getElementById("js-reset").addEventListener("click", function (e) {
      e.preventDefault();
      imageContainer.querySelectorAll("img").forEach((img) => {
          img.setAttribute("src", "");
          img.setAttribute("data-name", "");
      });
      document
          .getElementById("customizer-options")
          .querySelectorAll("img")
          .forEach((img) => {
              if (img.classList.contains("is-active")) {
                  img.classList.remove("is-active");
              }
          });
  });

  // Add the toggleSection function
  function toggleSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (section.style.display === "none" || section.style.display === "") {
          section.style.display = "block";
      } else {
          section.style.display = "none";
      }
  }

  // Add event listeners for section toggles if needed
  // For example:
  // document.getElementById("toggle-type").addEventListener("click", function() {
  //     toggleSection("type-section");
  // });
}
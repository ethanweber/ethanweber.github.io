let publications = [
  {
    title:
      "Eye, Robot: Learning to Look to Act with a BC-RL Perception-Action Loop",
    authors:
      "Justin Kerr, Kush Hari, <b>Ethan Weber</b>, Chung Min Kim, Brent Yi, Tyler Bonnen, Ken Goldberg, Angjoo Kanazawa",
    conference: "arXiv 2025",
    "project-page":
      "https://www.eyerobot.net/https://ethanweber.me/fillerbuster/",
    paper: "https://www.arxiv.org/abs/2506.10968",
    code: "https://github.com/kerrj/eyerobot",
    media: "img/publications/eyerobot.mp4",
  },
  {
    title: "Fillerbuster: Multi-View Scene Completion for Casual Captures",
    authors:
      "<b>Ethan Weber,</b> Norman Müller, Yash Kant, Vasu Agrawal, Michael Zollhöfer, Angjoo Kanazawa, Christian Richardt",
    conference: "arXiv 2025",
    "project-page": "https://ethanweber.me/fillerbuster/",
    paper: "https://arxiv.org/abs/2502.05175",
    code: "https://github.com/facebookresearch/fillerbuster",
    media: "img/publications/fillerbuster.mp4",
  },
  {
    title: "Pippo: High-Resolution Multi-View Humans from a Single Image",
    authors:
      "Yash Kant, <b>Ethan Weber</b>, Jin Kyu Kim, Rawal Khirodkar, Zhaoen Su, Julieta Martinez, Igor Gilitschenski, Shunsuke Saito, Timur Bagautdinov",
    conference: "arXiv 2025",
    "project-page": "https://yashkant.github.io/pippo/",
    paper: "https://yashkant.github.io/pippo/",
    code: "https://github.com/facebookresearch/pippo",
    media: "img/publications/pippo.mp4",
  },
  {
    title: "Toon3D: Seeing Cartoons from a New Perspective",
    authors:
      "<b>Ethan Weber*,</b> Riley Peterlinz*, Rohan Mathur, Frederik Warburg, Alexei A. Efros, Angjoo Kanazawa",
    conference: "arXiv 2024",
    "project-page": "https://toon3d.studio/",
    paper: "https://arxiv.org/abs/2405.10320",
    code: "https://github.com/ethanweber/toon3d",
    media: "img/publications/toon3D.mp4",
  },
  {
    title: "NeRFiller: Completing Scenes via Generative 3D Inpainting",
    authors:
      "<b>Ethan Weber,</b> Aleksander Hołyński, Varun Jampani, Saurabh Saxena, Noah Snavely, Abhishek Kar, Angjoo Kanazawa",
    conference: "CVPR 2024",
    "project-page": "https://ethanweber.me/nerfiller/",
    paper: "https://arxiv.org/abs/2312.04560",
    code: "https://github.com/ethanweber/nerfiller",
    media: "img/publications/nerfiller.mp4",
  },
  {
    title:
      "👻 Nerfbusters 🧹: Removing Ghostly Artifacts from Casually Captured NeRFs",
    authors:
      "Frederik Warburg*, <b>Ethan Weber*</b>, Matthew Tancik, Aleksander Hołyński, Angjoo Kanazawa",
    conference: "ICCV 2023",
    "project-page": "https://ethanweber.me/nerfbusters/",
    paper: "https://arxiv.org/abs/2304.10532",
    code: "https://github.com/ethanweber/nerfbusters",
    media: "img/publications/nerfbusters.mp4",
  },
  {
    title: "Nerfstudio: A Framework for Neural Radiance Field Development",
    authors:
      "Matthew Tancik*, <b>Ethan Weber*</b>, Evonne Ng*, Ruilong Li, Brent Yi, Justin Kerr, Terrance Wang, Alexander Kristoffersen, Jake Austin, Kamyar Salahi, Abhik Ahuja, David McAllister, Angjoo Kanazawa",
    conference: "SIGGRAPH 2023",
    "project-page": "https://docs.nerf.studio/",
    paper: "https://arxiv.org/abs/2302.04264",
    code: "https://github.com/nerfstudio-project/nerfstudio",
    media: "img/publications/nerfstudio.mp4",
  },
  {
    title:
      "The One Where They Reconstructed 3D Humans and Environments in TV Shows",
    authors:
      "Georgios Pavlakos*, <b>Ethan Weber*</b>, Matthew Tancik,  Angjoo Kanazawa",
    conference: "ECCV 2022",
    "project-page": "https://ethanweber.me/sitcoms3D/",
    paper: "https://arxiv.org/abs/2207.14279",
    code: "https://github.com/ethanweber/sitcoms3D",
    media: "img/publications/sitcoms3D.mp4",
  },
  {
    title: "Studying Bias in GANs through the Lens of Race",
    authors:
      "Vongani H. Maluleke, Neerja Thakkar, Tim Brooks, <b>Ethan Weber,</b> Trevor Darrell, Alexei A. Efros, Angjoo Kanazawa, Devin Guillory",
    conference: "ECCV 2022",
    "project-page": "https://neerja.me/bias-gans/",
    paper: "https://arxiv.org/abs/2209.02836",
    code: "https://github.com/ethanweber/anno",
    media: "img/publications/biasgan.jpg",
  },
  {
    title:
      "Incidents1M: a large-scale dataset of images with natural disasters, damage, and incidents",
    authors:
      "<b>Ethan Weber,</b> Dim P. Papadopoulos, Agata Lapedriza, Ferda Ofli, Muhammad Imran, Antonio Torralba",
    conference: "TPAMI 2022",
    "project-page": "http://incidentsdataset.csail.mit.edu/",
    paper: "https://arxiv.org/abs/2201.04236",
    code: "https://github.com/ethanweber/IncidentsDataset",
    media: "img/publications/incidents1m.png",
  },
  {
    title:
      "Detecting incidents, accelerating dataset annotation, and estimating depth with multi-view invariants",
    authors: "Ethan Weber",
    conference: "MIT MEng Thesis 2021",
    "thesis-page": "https://dspace.mit.edu/handle/1721.1/139162",
    media: "img/publications/thesis.png",
  },
  {
    title: "Scaling up instance annotation via label propagation",
    authors: "Dim P. Papadopoulos*, <b>Ethan Weber*</b>, Antonio Torralba",
    conference: "ICCV 2021",
    "project-page": "http://scaling-anno.csail.mit.edu/",
    paper: "https://arxiv.org/abs/2110.02277.pdf",
    code: "https://github.com/ethanweber/scaling-anno",
    media: "img/publications/scaling-anno.png",
  },
  {
    title: "Detecting natural disasters, damage, and incidents in the wild",
    authors:
      "<b>Ethan Weber,</b> Nuria Marzo, Dim P. Papadopoulos, Aritro Biswas, Agata Lapedriza, Ferda Ofli, Muhammad Imran, Antonio Torralba",
    conference: "ECCV 2020",
    "project-page": "http://incidentsdataset.csail.mit.edu/",
    paper: "https://arxiv.org/abs/2008.09188.pdf",
    code: "https://github.com/ethanweber/IncidentsDataset",
    media: "img/publications/detecting.png",
  },
  {
    title:
      "Building Disaster Damage Assessment in Satellite Imagery with Multi-Temporal Fusion",
    authors: "Ethan Weber and Hassan Kane",
    conference: "AI For Earth Sciences Workshop at ICLR 2020",
    presentation:
      "https://slideslive.com/38926353/building-disaster-damage-assessment-in-satelite-imagery-with-multitemporal-fusion",
    paper: "https://arxiv.org/abs/2004.05525.pdf",
    code: "https://github.com/ethanweber/xview2",
    media: "img/publications/satellite.png",
  },
];

function renderPublications(publications) {
  const publicationsRow = document.getElementById("publications_row");
  publications.forEach((publication) => {
    let mediaHTML = "";
    if (publication.media) {
      const mediaType = publication.media.split(".").pop();
      if (mediaType === "mp4") {
        mediaHTML = `
            <div class="publication-media">
                <video controls style="max-width: 100%; height: auto;">
                    <source src="${publication.media}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>`;
      } else if (
        (mediaType === "png") |
        (mediaType === "jpg") |
        (mediaType === "jpeg")
      ) {
        mediaHTML = `
                    <div class="publication-media">
                        <img src="${publication.media}" style="max-width: 100%; height: auto;">
                    </div>`;
      }
    }

    let publicationHTML = `
            <div class="publication-entry">
                <div class="publication-text">
                    <p>
                        <span class="paper-title">${
                          publication.title
                        }</span><br>
                        ${publication.authors.replace(
                          /, (?=[^,]*$)/,
                          ", and "
                        )}.<br><br>
                        ${
                          publication.conference
                            ? publication.conference + " "
                            : ""
                        }<br>
                        ${
                          publication["project-page"]
                            ? '| <a href="' +
                              publication["project-page"] +
                              '">Project Page</a>'
                            : ""
                        }
                        ${
                          publication.paper
                            ? '| <a href="' + publication.paper + '">Paper</a>'
                            : ""
                        }
                        ${
                          publication.code
                            ? '| <a href="' + publication.code + '">Code</a>'
                            : ""
                        }
                        ${
                          publication.presentation
                            ? '| <a href="' +
                              publication.presentation +
                              '">Presentation</a>'
                            : ""
                        }
                        ${
                          publication["thesis-page"]
                            ? '| <a href="' +
                              publication["thesis-page"] +
                              '">Thesis Page</a>'
                            : ""
                        }
                        ${"|"}
                    </p>
                </div>
                ${mediaHTML}
            </div><br>`;

    publicationsRow.innerHTML += publicationHTML;
  });
}

// Call the function with the publications array
renderPublications(publications);

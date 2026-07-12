let publications = [
  {
    type: "release",
    title: "Muse Image and Muse Video",
    subtitle: "Meta Superintelligence Labs · 2026",
    link: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
    linkLabel: "Research Blog",
    media: "msl/muse_image_and_video.mp4",
    mediaFull: "msl/muse_image_and_video_full.mp4",
    mediaOriginal: "msl/muse_image_and_video_original.mp4",
    favorite: true,
  },
  {
    type: "milestone",
    icon: "✨",
    date: "2026",
    text: "Joined Meta Superintelligence Labs (MSL), Menlo Park",
  },
  {
    type: "highlight",
    id: "reality-labs-snippets",
    favorite: true,
    title: "Multi-Perspective Generative Model",
    subtitle: "Meta Reality Labs · 2026",
    media: [
      "realitylabs/1.mp4",
      "realitylabs/2.mp4",
      "realitylabs/3.mp4",
      "realitylabs/4.mp4",
      "realitylabs/5.mp4",
    ],
    labels: [
      { span: 2, text: "Sparse Images to Video" },
      { span: 1, text: "Image to Video" },
      { span: 1, text: "Text to 360 Video" },
      { span: 1, text: "Image to Sparse Images" },
    ],
    caption: "Glimpses from the model I TL'd at Meta Reality Labs before moving to MSL. The same flexible model does all of these tasks (and more). See my teammate <a href=\"https://x.com/Nik__V__/status/2061929833584533801\">Nikhil Keetha's X post</a> for context, or DM me for more details.",
  },
  {
    title: "Free-Range Gaussians: Non-Grid-Aligned Generative 3D Gaussian Reconstruction",
    authors:
      "Ahan Shabanov, Peter Hedman, <b>Ethan Weber</b>, Zhengqin Li, Denis Rozumny, Gael Le Lan, Naina Dhingra, Lei Luo, Andrea Vedaldi, Christian Richardt, Andrea Tagliasacchi, Bo Zhu, Numair Khan",
    conference: "ECCV 2026",
    "project-page": "https://free-range-gaussians.github.io/",
    paper: "https://arxiv.org/abs/2604.04874",
    media: "img/publications/free-range-gaussians.mp4",
  },
  {
    title: "LuxRemix: Lighting Decomposition and Remixing for Indoor Scenes",
    authors:
      "Ruofan Liang, Norman Müller, <b>Ethan Weber</b>, Duncan Zauss, Nandita Vijaykumar, Peter Kontschieder, Christian Richardt",
    conference: "CVPR 2026",
    "project-page": "https://luxremix.github.io/",
    paper: "https://arxiv.org/abs/2601.15283",
    media: "img/publications/luxremix.mp4",
  },
  {
    title:
      "Flow matching policy gradients",
    authors:
      "David McAllister, Songwei Ge, Brent Yi, Chung Min Kim, <b>Ethan Weber</b>, Hongsuk Choi, Haiwen Feng, Angjoo Kanazawa",
    conference: "ICLR 2026",
    "project-page":
      "https://flowreinforce.github.io/",
    paper: "https://arxiv.org/abs/2507.21053",
    code: "https://github.com/akanazawa/fpo",
    media: "img/publications/fpo.mp4",
  },
  {
    title:
      "MapAnything: Universal feed-forward metric 3D reconstruction",
    authors:
      "Nikhil Keetha, Norman Müller, Johannes Schönberger, Lorenzo Porzi, Yuchen Zhang, Tobias Fischer, Arno Knapitsch, Duncan Zauss, <b>Ethan Weber</b>, Nelson Antunes, Jonathon Luiten, Manuel Lopez-Antequera, Samuel Rota Bulò, Christian Richardt, Deva Ramanan, Sebastian Scherer, Peter Kontschieder",
    conference: "3DV 2026",
    "project-page":
      "https://map-anything.github.io/",
    paper: "https://arxiv.org/abs/2509.13414",
    code: "https://github.com/facebookresearch/map-anything",
    media: "img/publications/mapanything.mp4",
    favorite: true,
  },
  {
    title: "Fillerbuster: Multi-View Scene Completion for Casual Captures",
    authors:
      "<b>Ethan Weber,</b> Norman Müller, Yash Kant, Vasu Agrawal, Michael Zollhöfer, Angjoo Kanazawa, Christian Richardt",
    conference: "3DV 2026",
    "project-page": "https://ethanweber.me/fillerbuster/",
    paper: "https://arxiv.org/abs/2502.05175",
    code: "https://github.com/facebookresearch/fillerbuster",
    media: "img/publications/fillerbuster.mp4",
  },
  {
    title: "Toon3D: Seeing Cartoons from a New Perspective",
    authors:
      "<b>Ethan Weber*,</b> Riley Peterlinz*, Rohan Mathur, Frederik Warburg, Alexei A. Efros, Angjoo Kanazawa",
    conference: "3DV 2026",
    "project-page": "https://toon3d.studio/",
    paper: "https://arxiv.org/abs/2405.10320",
    code: "https://github.com/ethanweber/toon3d",
    media: "img/publications/toon3D.mp4",
    favorite: true,
  },
  {
    type: "milestone",
    icon: "📌",
    date: "Oct 2025",
    text: "Organized <a href=\"https://scenecomp.github.io/\">SceneComp @ ICCV 2025</a> workshop on generative scene completion",
  },
  {
    title:
      "Eye, Robot: Learning to Look to Act with a BC-RL Perception-Action Loop",
    authors:
      "Justin Kerr, Kush Hari, <b>Ethan Weber</b>, Chung Min Kim, Brent Yi, Tyler Bonnen, Ken Goldberg, Angjoo Kanazawa",
    conference: "CoRL 2025",
    "project-page":
      "https://www.eyerobot.net/",
    paper: "https://www.arxiv.org/abs/2506.10968",
    code: "https://github.com/kerrj/eyerobot",
    media: "img/publications/eyerobot.mp4",
    favorite: true,
  },
  {
    title: "Pippo: High-Resolution Multi-View Humans from a Single Image",
    authors:
      "Yash Kant, <b>Ethan Weber</b>, Jin Kyu Kim, Rawal Khirodkar, Zhaoen Su, Julieta Martinez, Igor Gilitschenski, Shunsuke Saito, Timur Bagautdinov",
    conference: "CVPR 2025",
    "project-page": "https://yashkant.github.io/pippo/",
    paper: "https://yashkant.github.io/pippo/",
    code: "https://github.com/facebookresearch/pippo",
    media: "img/publications/pippo.mp4",
  },
  {
    type: "milestone",
    icon: "🔬",
    date: "2025",
    text: "Joined Meta Reality Labs, Zurich",
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
    title: "Nerfstudio: A Modular Framework for Neural Radiance Field Development",
    favorite: true,
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
    favorite: true,
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

  const heading = document.querySelector("#publications h2");
  if (heading) {
    heading.innerHTML = `Research`;
  }

  const filterHTML = `
    <div class="pub-filters">
      <button class="pub-filter-btn active" data-filter="all">📚 All</button>
      <button class="pub-filter-btn" data-filter="favorites">⭐ My Favorites</button>
    </div>`;
  const parts = [filterHTML];

  publications.forEach((publication) => {
    if (publication.type === "milestone") {
      parts.push(`
            <div class="research-milestone">
                <span class="research-milestone-icon">${publication.icon || ""}</span>
                <span class="research-milestone-date">${publication.date}</span>
                <span class="research-milestone-sep">·</span>
                <span class="research-milestone-text">${publication.text}</span>
            </div>`);
      return;
    }

    if (publication.type === "release") {
      const modalId = `releaseModal_${(publication.title || 'release').replace(/[^a-z0-9]/gi, '_')}`;
      let mediaHTML = "";
      if (publication.media) {
        const mediaType = publication.media.split(".").pop();
        if (mediaType === "mp4") {
          mediaHTML = `
            <a class="publication-media release-media-trigger" href="#${modalId}" data-toggle="modal" aria-label="Open ${publication.title} video">
                <video class="publication-video" muted playsinline loop preload="none" data-src="${publication.media}"></video>
                <span class="release-media-hint" aria-hidden="true"><i class="fa fa-expand"></i></span>
            </a>`;
        } else {
          mediaHTML = `
            <div class="publication-media">
                <img src="${publication.media}" loading="lazy" decoding="async">
            </div>`;
        }
      }
      const favClass = publication.favorite ? ' publication-favorite' : '';
      const linkLabel = publication.linkLabel || 'Read the announcement';
      parts.push(`
            <div class="publication-entry publication-release${favClass}">
                ${mediaHTML}
                <div class="publication-text">
                    <span class="paper-title">${publication.title}</span>
                    ${publication.subtitle ? `<span class="release-subtitle">${publication.subtitle}</span>` : ""}
                    ${publication.link ? `<a class="release-cta" href="${publication.link}">${linkLabel}</a>` : ""}
                </div>
            </div>`);
      if (publication.media && publication.media.endsWith('.mp4')) {
        parts.push(`
            <div class="modal fade release-modal" id="${modalId}" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <button type="button" class="project-modal-close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                  <div class="project-modal-body">
                    <h3 class="project-modal-title">${publication.title}</h3>
                    <video class="project-modal-img" controls loop playsinline preload="none" data-src="${publication.mediaFull || publication.media}"></video>
                    ${publication.subtitle ? `<p class="release-modal-subtitle">${publication.subtitle}</p>` : ''}
                    <p class="release-modal-links">
                      ${publication.link ? `<a href="${publication.link}">${linkLabel}</a>` : ''}
                      ${publication.mediaOriginal ? `<a href="${publication.mediaOriginal}" target="_blank" rel="noopener noreferrer">Original Video</a>` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>`);
      }
      return;
    }

    if (publication.type === "highlight") {
      const idAttr = publication.id ? ` id="${publication.id}"` : "";
      const favClass = publication.favorite ? ' publication-favorite' : '';
      const favTitle = publication.favorite ? ' title="⭐ Personal favorite"' : '';
      const expandedLabels = [];
      (publication.labels || []).forEach((l) => {
        for (let i = 0; i < (l.span || 1); i++) expandedLabels.push(l.text);
      });
      const videos = (publication.media || [])
        .map((src, i) => {
          const label = expandedLabels[i] || "";
          const labelAttr = label ? ` data-label="${label.replace(/"/g, "&quot;")}"` : "";
          return `<div class="research-highlight-video"${labelAttr}><video src="${src}" muted playsinline loop autoplay preload="metadata" controlslist="nofullscreen nodownload noremoteplayback" disablepictureinpicture oncontextmenu="return false;"></video></div>`;
        })
        .join("");
      parts.push(`
            <div class="research-highlight${favClass}"${idAttr}${favTitle}>
                <div class="research-highlight-header">
                    ${publication.title ? `<span class="paper-title">${publication.title}</span>` : ""}
                    ${publication.subtitle ? `<span class="release-subtitle">${publication.subtitle}</span>` : ""}
                </div>
                <div class="research-highlight-strip">${videos}</div>
                ${publication.caption ? `<p class="research-highlight-caption">${publication.caption}</p>` : ""}
            </div>`);
      return;
    }

    let mediaHTML = "";
    if (publication.media) {
      const mediaType = publication.media.split(".").pop();
      if (mediaType === "mp4") {
        const controlsAttr = publication.controls ? " controls" : "";
        mediaHTML = `
            <div class="publication-media">
                <video class="publication-video" muted playsinline loop preload="none" data-src="${publication.media}"${controlsAttr}>
                </video>
            </div>`;
      } else if (
        mediaType === "png" ||
        mediaType === "jpg" ||
        mediaType === "jpeg"
      ) {
        mediaHTML = `
            <div class="publication-media">
                <img src="${publication.media}" loading="lazy" decoding="async">
            </div>`;
      }
    }

    const links = [];
    if (publication["project-page"]) {
      links.push(`<a href="${publication["project-page"]}">Project Page</a>`);
    }
    if (publication.paper) {
      links.push(`<a href="${publication.paper}">Paper</a>`);
    }
    if (publication.code) {
      links.push(`<a href="${publication.code}">Code</a>`);
    }
    if (publication.presentation) {
      links.push(`<a href="${publication.presentation}">Presentation</a>`);
    }
    if (publication["thesis-page"]) {
      links.push(`<a href="${publication["thesis-page"]}">Thesis Page</a>`);
    }
    const linksHTML = links.join(" | ");

    const favClass = publication.favorite ? ' publication-favorite' : '';
    const favTitle = publication.favorite ? ' title="\u2B50 Personal favorite"' : '';

    parts.push(`
            <div class="publication-entry${favClass}"${favTitle}>
                ${mediaHTML}
                <div class="publication-text">
                    <p>
                        <span class="paper-title">${publication.title}</span>
                        ${publication.authors ? publication.authors.replace(/, (?=[^,]*$)/, ", and ") + ".<br>" : ""}
                        ${publication.conference ? publication.conference + " " : ""}<br>
                        ${linksHTML}
                    </p>
                </div>
            </div>`);
  });

  publicationsRow.innerHTML = parts.join('');

  // Move modals from #publications_row to <body> so Bootstrap dismiss (X, backdrop,
  // ESC) isn't trapped by parent stacking contexts / layout constraints.
  publicationsRow.querySelectorAll('.modal.release-modal').forEach((m) => {
    document.body.appendChild(m);
  });

  document.querySelectorAll("#publications .pub-filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const btnTop = btn.getBoundingClientRect().top;

      document.querySelectorAll("#publications .pub-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".publication-entry").forEach((entry) => {
        if (filter === "all") {
          entry.classList.remove("pub-hidden");
        } else {
          entry.classList.toggle("pub-hidden", !entry.classList.contains("publication-favorite"));
        }
      });
      document.querySelectorAll(".research-milestone").forEach((m) => {
        m.classList.toggle("pub-hidden", filter !== "all");
      });
      document.querySelectorAll(".research-highlight").forEach((m) => {
        if (filter === "all") {
          m.classList.remove("pub-hidden");
        } else {
          m.classList.toggle("pub-hidden", !m.classList.contains("publication-favorite"));
        }
      });

      const newBtnTop = btn.getBoundingClientRect().top;
      window.scrollBy(0, newBtnTop - btnTop);
    });
  });

  // Phase 1: load metadata (first frame) when video is approaching viewport
  const preloadObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.dataset.src) {
        entry.target.src = entry.target.dataset.src;
        entry.target.preload = "metadata";
        delete entry.target.dataset.src;
        entry.target.load();
        preloadObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "600px" });

  // Phase 2: play/pause when actually in viewport
  const playObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  }, { rootMargin: "50px" });

  document.querySelectorAll(".publication-video").forEach((v) => {
    preloadObserver.observe(v);
    playObserver.observe(v);
  });

  // Scroll reveal (uses shared utility defined in index.html)
  if (window.initReveal) {
    window.initReveal(document.querySelectorAll(".publication-entry"), 3, 0.08);
  }

  // Release modal: lazy-load the video on first open, and always restart it from
  // the beginning whenever the popup is shown; pause when it closes.
  if (window.jQuery) {
    $(document).on("shown.bs.modal", ".release-modal", function () {
      const video = this.querySelector("video");
      if (!video) return;
      if (video.dataset.src) {
        video.src = video.dataset.src;
        delete video.dataset.src;
        video.load();
      }
      const startFromBeginning = () => {
        try { video.currentTime = 0; } catch (e) {}
        video.play().catch(() => {});
      };
      if (video.readyState >= 1) {
        startFromBeginning();
      } else {
        video.addEventListener("loadedmetadata", startFromBeginning, { once: true });
      }
    });
    $(document).on("hidden.bs.modal", ".release-modal", function () {
      const video = this.querySelector("video");
      if (video) video.pause();
    });
  }
}

renderPublications(publications);

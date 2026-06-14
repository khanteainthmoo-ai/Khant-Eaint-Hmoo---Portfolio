
const experiences = [
  {
    title: "Research Assistant",
    organization: "Shwetaungthagathu Reform Initiative Centre (SRIc)",
    image: "images/experience/sric.png",
    description: "Supported research activities, data collection, policy-related analysis, and article development on Myanmar’s socio-economic and environmental issues.",
    tags: ["Research", "Policy", "Data"]
  },
  {
    title: "Impact Officer",
    organization: "ASEAN Youth Organization - Myanmar Chapter",
    image: "images/experience/ayo.png",
    description: "Contributed to youth-led social impact initiatives, project coordination, community engagement, and regional youth empowerment activities.",
    tags: ["Youth Leadership", "Impact", "ASEAN"]
  },
  {
    title: "Freelance Teacher",
    organization: "IGCSE Mathematics and Economics",
    image: "images/experience/teacher.png",
    description: "Provided private teaching support for IGCSE Mathematics and Economics students, focusing on concept explanation, exam preparation, and academic confidence.",
    tags: ["Teaching", "IGCSE", "Economics"]
  }
];

const achievements = {
  academic: [
    {
      title: "Bachelor of Economics Student",
      image: "images/achievements/economics-student.png",
      description: "Dean's List - Awards for all sememsters and,in first & second-year Bachelor of Economics student at Albukhary International University."
    },
    {
      title: "Peer Tutor",
      image: "images/achievements/peer-tutor.png",
      description: "Provided peer tutoring support in Mathematics and Economics through university-level academic support sessions."
    },
    {
      title: "Top 3 Oustanding Student in BEC(hons) Program",
      image: "images/achievements/top3.jpg",
      description: "Awarded for outstanding academic performance in the Bachelor of Economics (hons) program, 2026."
    }
  ],
  voluntary: [
    {
      title: "Project HOPE",
      image: "images/achievements/project-hope.png",
      description: "Contributed to an education and community service initiative supporting Rohingya children through volunteer teaching and youth engagement.Project Hope was 2 yeer-long project that was implemented in 2024 and 2025 with over 50 teaching volunteers from AMSA - AIU Myanmar Students' Association."
    },
    {
      title: "President of AIU Orators Club",
      image: "images/achievements/orators.jpg",
      description: "Served as President of the AIU Orators Club, leading public speaking initiatives, organizing debate competitions and Model United Nations (MUN) competitions for both Internal University and External Conferences."
    },
    {
      title: "AMSA Leadership",
      image: "images/achievements/amsa.jpg",
      description: "Served as the Vice President in leadership roles within the AIU Myanmar Student Association, supporting student welfare, cultural activities, and community projects such as project HOPE, Quran Translation Enhancement, and ASEAN Youth Camp."
    },
    {
      title: "ASEAN Youth Camp, Genting Highlands -2025",
      image: "images/achievements/youthcamp.jpg",
      description: "As the oraganizing committee member, I contributed to the planning and execution of the ASEAN Youth Camp along with guidance of Senior Lecturers from IIIT, Malaysia, which brought together young leaders from across AMSA."
    },
    {
      title: "Network Exco of AIU PEERS Club",
      image: "images/achievements/peers.jpg",
      description: "Served as a network executive of the AIU PEERS Club, contributing to the club's initiatives and activities throughout the year 2025-2026 in order to support the AIU students' welfare and Mental Health."
    }

  ],
  extracurricular: [
    {
      title: "ASEAN Youth Leadership Program (YouLead-2026)",
      image: "images/achievements/youlead.jpg",
      description: "Supported youth leadership engagement through diplomacy, communication, networking, and collaboration among ASEAN youth leaders."
    },
    {
      title: "Emcee for AIU Events",
      image: "images/achievements/emcee.jpg",
      description: "Successfully emceed various university events, facilitating smooth proceedings and engaging the audience including the major events such as AIU cultural week 2025,Week of Welcome 2025, AMSA Goldan Thabin 2025 and other events."
    },
    {
      title: "Community Enagagement Program in Alor Setar, Kedah, Malaysia",
      image: "images/achievements/community.jpg",
      description: "Activily participated in multiple community engagement programs in Alor Setar, Kedah, Malaysia in order to make the community impacts with local residents."
    }
  ]
};

function createCard(item) {
  return `
    <div class="col-lg-4 col-md-6 reveal">
      <div class="project-card tilt-card">
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img">` : ""}
        <i class="bi bi-award"></i>
        <h4>${item.title}</h4>
        ${item.organization ? `<h6>${item.organization}</h6>` : ""}
        <p>${item.description}</p>
        ${
          item.tags
            ? `<div>${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>`
            : ""
        }
      </div>
    </div>
  `;
}

if (document.getElementById("experienceList")) {
  document.getElementById("experienceList").innerHTML =
    experiences.map(createCard).join("");
}

if (document.getElementById("academicAchievements")) {
  document.getElementById("academicAchievements").innerHTML =
    achievements.academic.map(createCard).join("");
}

if (document.getElementById("voluntaryAchievements")) {
  document.getElementById("voluntaryAchievements").innerHTML =
    achievements.voluntary.map(createCard).join("");
}

if (document.getElementById("extracurricularAchievements")) {
  document.getElementById("extracurricularAchievements").innerHTML =
    achievements.extracurricular.map(createCard).join("");
}

const revealElements = document.querySelectorAll(".reveal");
const topBtn = document.getElementById("topBtn");

function revealOnScroll() {
  const updatedRevealElements = document.querySelectorAll(".reveal");

  updatedRevealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

 if (topBtn) {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
});

revealOnScroll();

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function sendMessage(event) {
  event.preventDefault();

  document.getElementById("formMessage").innerHTML =
    "✅ Message sent successfully! This is a demo form.";

  event.target.reset();
}
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️";
  }

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = "🌙";
    }

  });
}
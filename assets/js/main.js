
      // Skills data
      var skills = [
        
        {
          name: "HTML5",
          icon: "fab fa-html5",
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "CSS3",
          icon: "fab fa-css3-alt",
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "JavaScript",
          icon: "fab fa-js-square",
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "React",
          icon: "fab fa-react",
          color: "from-blue-400 to-blue-600",
        },
        
        // {
        //   name: "Sass",
        //   icon: "fab fa-sass",
        //   color: "from-pink-400 to-pink-600",
        // },
        {
          name: "Node.js",
          icon: "fab fa-node-js",
          color: "from-green-400 to-green-600",
        },
        {
          name: "Git",
          icon: "fab fa-git-alt",
          color: "from-red-400 to-red-600",
        },
        {
          name: "GitHub",
          icon: "fab fa-github",
          color: "from-gray-600 to-gray-800",
        },
        { name: "NPM", icon: "fab fa-npm", color: "from-red-500 to-red-700" },
        // {
        //   name: "Bootstrap",
        //   icon: "fab fa-bootstrap",
        //   color: "from-purple-500 to-purple-700",
        // },
        // {
        //   name: "Vue.js",
        //   icon: "fab fa-vuejs",
        //   color: "from-green-500 to-green-700",
        // },
        // {
        //   name: "Angular",
        //   icon: "fab fa-angular",
        //   color: "from-red-600 to-red-800",
        // },
      ];

      // Generate skills HTML
      function generateSkills() {
        var skillsContainer = document.getElementById("skills-container");
        var skillsHTML = "";

        for (var i = 0; i < skills.length; i++) {
          var skill = skills[i];
          skillsHTML +=
            '<div class="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">';
          skillsHTML +=
            '<div class="w-16 h-16 mb-4 p-3 rounded-2xl bg-gradient-to-br ' +
            skill.color +
            ' shadow-lg group-hover:scale-110 transform transition-transform duration-300 flex items-center justify-center">';
          skillsHTML +=
            '<i class="' + skill.icon + ' text-white text-2xl"></i>';
          skillsHTML += "</div>";
          skillsHTML +=
            '<h3 class="text-lg font-semibold text-slate-800 text-center group-hover:text-blue-600 transition-colors duration-300">';
          skillsHTML += skill.name;
          skillsHTML += "</h3>";
          skillsHTML += "</div>";
        }

        skillsContainer.innerHTML = skillsHTML;
      }

      // Scroll to section function
      function scrollToSection(sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          updateActiveNav(sectionId);
        }
      }

      // Update active navigation
      function updateActiveNav(activeId) {
        var navLinks = document.querySelectorAll(".nav-link");
        for (var i = 0; i < navLinks.length; i++) {
          navLinks[i].classList.remove("text-blue-600");
          navLinks[i].classList.add("text-slate-600");
        }

        var activeLink = document.querySelector(
          "[onclick=\"scrollToSection('" + activeId + "')\"]"
        );
        if (activeLink) {
          activeLink.classList.remove("text-slate-600");
          activeLink.classList.add("text-blue-600");
        }
      }

      // Handle scroll events
      function handleScroll() {
        var navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.classList.remove("bg-transparent");
          navbar.classList.add("bg-white/90", "backdrop-blur-md", "shadow-lg");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove(
            "bg-white/90",
            "backdrop-blur-md",
            "shadow-lg"
          );
        }

        // Update active section based on scroll position
        var sections = ["home", "sobre", "projetos", "skills", "contato"];
        var currentSection = "home";

        for (var i = 0; i < sections.length; i++) {
          var element = document.getElementById(sections[i]);
          if (element) {
            var rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sections[i];
            }
          }
        }

        updateActiveNav(currentSection);
      }

      // Initialize
      document.addEventListener("DOMContentLoaded", function () {
        generateSkills();
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
        window.addEventListener("scroll", handleScroll);
      });

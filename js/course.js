let buttons = document.querySelectorAll(".sidebar ul li");
let cards = document.querySelectorAll(".course-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Remove active class
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});



// dummy data 

    // 1. Saare courses ki info yahan rakhenge
    const courses = [
      {
        id: "1",
        title: "Python for Beginners",
        subtitle: "Learn Python from scratch and build real-world projects.",
        rating: "4.5",
        ratingCount: "1,200 ratings",
        students: "8,500 students",
        lastUpdated: "11/2025",
        language: "English",
        price: "₹399",
        oldPrice: "₹1,699",
        discountText: "77% off • 5 days left at this price!",
        learn: [
          "Understand Python basics and syntax",
          "Build small applications with Python",
          "Work with files, functions, and modules",
          "Prepare for advanced Python topics"
        ],
        hours: "8 hours on-demand video",
        previewVideo: "videos/python-preview.mp4" // agar nahi hai to blank chhod sakti ho
      },
      {
        id: "2",
        title: "Fullstack Web Development",
        subtitle: "HTML, CSS, JavaScript, and backend to become a fullstack dev.",
        rating: "4.7",
        ratingCount: "2,500 ratings",
        students: "15,000 students",
        lastUpdated: "10/2025",
        language: "English, Hindi [Auto]",
        price: "₹499",
        oldPrice: "₹2,499",
        discountText: "80% off • Limited time!",
        learn: [
          "Build responsive websites",
          "Create dynamic web apps with JS",
          "Understand APIs and backend basics",
          "Deploy your projects online"
        ],
        hours: "15 hours on-demand video",
        previewVideo: ""
      },
      {
        id: "3",
        title: "Intro to AI Agents and Agentic AI",
        subtitle: "Understand how AI agents work and how to use them in business.",
        rating: "4.4",
        ratingCount: "1,980 ratings",
        students: "5,932 students",
        lastUpdated: "11/2025",
        language: "English [Auto]",
        price: "₹399",
        oldPrice: "₹1,709",
        discountText: "77% off • 5 days left at this price!",
        learn: [
          "Understand AI agents and underlying technology",
          "Learn how to build AI agents",
          "Skyrocket productivity using AI agents",
          "Build a solid foundation in AI concepts"
        ],
        hours: "2 hours on-demand video",
        previewVideo: ""
      },
      {
        id: "4",
        title: "HTML Course For Beginner",
        subtitle: "Zero To Hero Learn HTML for Beginner Course.",
        rating: "4.4",
        ratingCount: "1,800 ratings",
        students: "5,780 students",
        lastUpdated: "12/2025",
        language: "English [Auto]",
        price: "₹299",
        oldPrice: "₹1,509",
        discountText: "90% off • 5 days left at this price!",
        learn: [
          "Understand AI agents and underlying technology",
          "Learn how to build AI agents",
          "Skyrocket productivity using AI agents",
          "Build a solid foundation in AI concepts"
        ],
        hours: "2 hours on-demand video",
        previewVideo: ""
      },
      {
        id: "5",
        title: "JavaScript Zero to Hero",
        subtitle: "Understand how Js work and how to use them in intractive Ui.",
        rating: "4.4",
        ratingCount: "1,980 ratings",
        students: "5,932 students",
        lastUpdated: "11/2025",
        language: "English [Auto]",
        price: "₹399",
        oldPrice: "₹1,709",
        discountText: "90% off • 5 days left at this price!",
        learn: [
          "Understand JavaScript and underlying technology",
          "Learn how to build Modern UI",
          "Skyrocket productivity using Javascript",
          "Build a solid foundation in JavaScript concepts"
        ],
        hours: "2 hours on-demand video",
        previewVideo: ""
      },
      {
        id: "6",
        title: "Digital Marketing Zero to Hero",
        subtitle: "Understand how Digital marketing work and how to use them in bussiness.",
        rating: "4.4",
        ratingCount: "1,980 ratings",
        students: "5,932 students",
        lastUpdated: "11/2025",
        language: "English [Auto]",
        price: "₹399",
        oldPrice: "₹1,709",
        discountText: "90% off • 5 days left at this price!",
        learn: [
          "Understand Digital marketing and underlying technology",
          "Learn how to build Bussiness.",
          "Skyrocket productivity using Digital marketing",
          "Build a solid foundation in Digital marketing concepts"
        ],
        hours: "4 hours on-demand video",
        previewVideo: ""
      },
      {
        id: "7",
        title: "Zero to Hero React Js",
        subtitle: "Understand how React Js work and how to use them in intractive Ui.",
        rating: "4.4",
        ratingCount: "1,980 ratings",
        students: "5,932 students",
        lastUpdated: "11/2025",
        language: "English [Auto]",
        price: "₹799",
        oldPrice: "₹1,709",
        discountText: "60% off • 5 days left at this price!",
        learn: [
          "Understand React Js and underlying technology",
          "Learn how to build Modern UI",
          "Skyrocket productivity using React Js",
          "Build a solid foundation in React Js concepts"
        ],
        hours: "7+ hours on-demand video",
        previewVideo: ""
      },
      {
        id: "8",
        title: "UI/UX Design Zero to Hero",
        subtitle: "Understand how UI/UX Design work and how to use them in intractive Ui.",
        rating: "4.4",
        ratingCount: "1,980 ratings",
        students: "5,932 students",
        lastUpdated: "11/2025",
        language: "English [Auto]",
        price: "₹399",
        oldPrice: "₹1,709",
        discountText: "90% off • 5 days left at this price!",
        learn: [
          "Understand UI/UX Design and underlying technology",
          "Learn how to build Modern UI",
          "Skyrocket productivity using UI/UX Design",
          "Build a solid foundation in UI/UX Design concepts"
        ],
        hours: "5+ hours on-demand video",
        previewVideo: ""
      }
    ];

    // 2. URL se ?id=.. nikalna
    function getCourseIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }

    // 3. Page par data fill karna
    function loadCourseDetail() {
      const id = getCourseIdFromUrl();
      const course = courses.find(c => c.id === id);

      if (!course) {
        document.querySelector(".course-main").innerHTML = "<h1>Course not found</h1>";
        return;
      }

      // Text fields
      document.getElementById("courseTitle").textContent = course.title;
      document.getElementById("courseSubtitle").textContent = course.subtitle;
      document.getElementById("courseMeta").textContent =
        `Rating ${course.rating} (${course.ratingCount}) • ${course.students} • Last updated ${course.lastUpdated} • ${course.language}`;

      document.getElementById("coursePrice").textContent = course.price;
      document.getElementById("courseOldPrice").textContent = course.oldPrice;
      document.getElementById("courseDiscountText").textContent = course.discountText;
      document.getElementById("courseHours").textContent = course.hours;

      // Learn list
      const ul = document.getElementById("courseLearnList");
      ul.innerHTML = "";
      course.learn.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      // Preview video (optional)
      if (course.previewVideo) {
        document.getElementById("coursePreviewSource").src = course.previewVideo;
        document.getElementById("coursePreview").load();
      } else {
        // Agar video nahi hai to video hide kar do
        document.getElementById("coursePreview").style.display = "none";
      }
    }

    loadCourseDetail();

    // content 

    document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {

        const body = header.nextElementSibling;

        // toggle open/close
        body.style.display =
            body.style.display === "block" ? "none" : "block";

    });
});

// ======= SEARCH + FILTER FOR COURSES =======
const searchInput = document.getElementById('course-search');
const filterSelect = document.getElementById('course-filter');
const courseCards = document.querySelectorAll('.course-card');
const sidebarItems = document.querySelectorAll('.sidebar li');

function applyCourseFilters() {
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedCategory = filterSelect ? filterSelect.value : "all";

    courseCards.forEach(card => {
        const titleEl = card.querySelector('h3');
        const titleText = titleEl ? titleEl.textContent.toLowerCase() : "";

        const matchesText = titleText.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" || card.classList.contains(selectedCategory);

        card.style.display = matchesText && matchesCategory ? "block" : "none";
    });
}

// mobile search
if (searchInput) {
    searchInput.addEventListener('input', applyCourseFilters);
}

// mobile filter dropdown
if (filterSelect) {
    filterSelect.addEventListener('change', applyCourseFilters);
}

// desktop sidebar click -> category filter (same function use)
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-filter');

        // sidebar active class
        sidebarItems.forEach(li => li.classList.remove('active'));
        item.classList.add('active');

        // mobile filter dropdown sync
        if (filterSelect) {
            filterSelect.value = category;
        }

        applyCourseFilters();
    });
});

// page load: show all
applyCourseFilters();

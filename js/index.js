const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//Update the img src for the logos

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerLogo = document.getElementById("cta-img");
headerLogo.setAttribute("src", siteContent["cta"]["img-src"]);

let middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Update content to nav items/anchor tags and set color for each anchor;
const anchors = document.querySelectorAll("a");

anchors[0].textContent = siteContent.nav["nav-item-1"];
anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[5].textContent = siteContent.nav["nav-item-6"];
anchors.forEach(input => (input.style.color = "lightgreen"));

// Setting H1 text with breaks using innerHTML// need to find another way to refactor this
let h1 = document.querySelector("h1");
h1.innerHTML = "Dom <br> Is <br> Awesome";

// updating h4's for main content/cta section

// have to refactor code below to make it DRY
let cta = document.querySelectorAll(".text-content h4");
cta[0].textContent = siteContent["main-content"]["features-h4"];
cta[1].textContent = siteContent["main-content"]["about-h4"];
cta[2].textContent = siteContent["main-content"]["services-h4"];
cta[3].textContent = siteContent["main-content"]["product-h4"];
cta[4].textContent = siteContent["main-content"]["vision-h4"];

// have to refactor code below to make it dry
let ctaContent = document.querySelectorAll(".text-content p");
ctaContent[0].textContent = siteContent["main-content"]["features-content"];
ctaContent[1].textContent = siteContent["main-content"]["about-content"];
ctaContent[2].textContent = siteContent["main-content"]["services-content"];
ctaContent[3].textContent = siteContent["main-content"]["product-content"];
ctaContent[4].textContent = siteContent["main-content"]["vision-content"];

// Adding contact h4 title //

let contactSection = document.querySelector(".contact h4");
contactSection.textContent = siteContent.contact["contact-h4"];

// adding contact content with <br>
let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent.contact.address.replace(
  "Street",
  "Street<br> "
);
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;

// footer content
let footer = document.querySelector("footer");
footer.innerHTML = siteContent.footer.copyright.replace("2018", "2018<br> ");

// button content
let button = document.querySelector("button");
button.textContent = siteContent.cta.button;

// Adding more nav links and setting color

// creating new anchor DOM elements
const extraAnchor1 = document.createElement("a");
extraAnchor1.setAttribute("href", "a");
extraAnchor1.textContent = "Le Secret To Life";

const extraAnchor2 = document.createElement("a");
extraAnchor2.setAttribute("href", "a");
extraAnchor2.textContent = "I Love Lambda";

// Adding elements to nav bar via append and prepend
const navBar = document.querySelector("nav");
navBar.appendChild(extraAnchor1);
navBar.prepend(extraAnchor2);

// setting color to anchors through selecting a tags and looping through each element and setting style color to lightgreen;
let navBarColors = document.querySelectorAll("a");

for (let i = 0; i < navBarColors.length; i++) {
  navBarColors[i].style.color = "lightgreen";
}

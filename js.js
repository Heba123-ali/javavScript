const root = document.getElementById("root");
const header = document.createElement("header");
const nav = document.createElement("nav");


Object.assign(nav.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "10px 20px",
});


const figure = document.createElement("figure");
const logo = document.createElement("img");

logo.src = "images/logo.png";
logo.alt = "logo";

figure.appendChild(logo);


const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "space-between";
ul.style.alignItems = "center";
ul.style.gap = "20px";

const links = ["Home", "About", "Services", "Web", "Element", "Contact"];
links.forEach(link => {
    const list = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#";
    Object.assign(anchor.style, {
        textDecoration: "none",
        fontSize: "1.3rem",
        color: "#000",
    })
    ul.appendChild(list);
    list.appendChild(anchor);
    anchor.textContent = link;
});
const search = document.createElement("div");
const searchIcon = document.createElement("i");
searchIcon.className="fa-solid fa-magnifying-glass";
searchIcon.style.paddingRight = "2rem";
search.appendChild(searchIcon);
nav.appendChild(figure);
nav.appendChild(ul);
nav.appendChild(search);
header.appendChild(nav);

const container = document.createElement("div");
Object.assign(container.style, {
  backgroundImage: "url(images/banner-bg.png)",
  backgroundSize: "cover",
  width: "100%",
  padding: "100px 0",
  textAlign: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px"
});
const h1 = document.createElement("h1")
h1.textContent = "Web eLements Templates";
const h3 = document.createElement("h3")
h3.textContent = "Free Multipurpose Responsive Landing Page";
const btn = document.createElement("a");
btn.href = "#";
btn.textContent = "Read More";
Object.assign(btn.style, {
    color: "#000",
    textDecoration: "none",
    backgroundColor: "#fff",
    padding: "20px",
    fontSize: "1rem",
    borderRadius: "5px",
    
}) 
container.appendChild(h1);
container.appendChild(h3);
container.appendChild(btn);

root.appendChild(header);
root.appendChild(container);


// Media query for mobile devices

const burger = document.createElement("div");
burger.className = "burger";
burger.innerHTML = "☰";
burger.style.display = "none";
burger.style.fontSize = "2rem";
burger.style.cursor = "pointer";

nav.appendChild(burger);
burger.addEventListener("click", () => {
    if (ul.style.display === "none") {
        ul.style.display = "flex";
        ul.style.flexDirection = "column";
        ul.style.position = "absolute";
        ul.style.top = "60px";
        ul.style.left = "0";
        ul.style.width = "100%";
        ul.style.backgroundColor = "#f8f8f8";
        ul.style.padding = "20px";
        ul.style.zIndex = "1";
        ul.style.gap = "10px";

    } else {
        ul.style.display = "none";
    }
})

const mq = window.matchMedia("(max-width:991px)");
function mediaQuery(e) {
    if (e.matches) {
        ul.style.display = "none";
        burger.style.display = "block";
    } else {
    ul.style.display = "flex";
    burger.style.display = "none";
    ul.style.position = "static";
    ul.style.flexDirection = "row";
    ul.style.background = "transparent";
    }
}
mq.addEventListener("change", mediaQuery);
mediaQuery(mq);


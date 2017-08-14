function addCard(title, text, link) {
  const body = document.getElementById("page-content-" + (addCard.side + 1));
  const card = document.createElement("div");
  card.classList.add("mdl-card", "mdl-shadow--2dp");
  
  const title_e = document.createElement("div");
  title_e.classList.add("mdl-card__title");
  
  const title_text = document.createElement("h2");
  title_text.innerHTML = title;
  title_text.classList.add("mdl-card__title-text");
  
  title_e.appendChild(title_text);
  card.appendChild(title_e);
  
  const sup_text = document.createElement("div");
  sup_text.classList.add("mdl-card__supporting-text");
  sup_text.innerHTML = text;
  card.appendChild(sup_text);
  
  const menu = document.createElement("div");
  menu.classList.add("mdl-card__actions", "mdl-card--border");
  card.appendChild(menu);
  
  const menu_btn = document.createElement("a");
  menu_btn.classList.add("mdl-button", "mdl-button--colored", "mdl-js-button", "mdl-js-ripple-effect");
  menu_btn.innerHTML = "More";
  menu_btn.href = link;
  menu_btn.setAttribute("target", "_blank");
  menu.appendChild(menu_btn);
  
  body.appendChild(card);
  
  addCard.side = !addCard.side;
}
addCard.side = false;

function getNews(src) {
  for(let i = 0; i < src.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var doc = JSON.parse(xhr.responseText);
      for(var i = 0; i < doc.articles.length; i++) {
        addCard(doc.articles[i].title, doc.articles[i].description, doc.articles[i].url);
      }
    };
    xhr.open("GET", "https://newsapi.org/v1/articles?apiKey=06fbd7c470bb4580b930d28a9934fa45&source=" + src[i]);
    xhr.send();
  }
}

function test_int() {
  var int = prompt("What are you interested in? Technology, sports, everything, etc.");
  if(int) {
    int = int.toLowerCase();
    if(int === "sports") int = "sport";
    if(int === "tech") int = "technology";
    if(int === "everything") int = "general";
    if(int === "general") {
      test_int.news = ["google-news"];
      localStorage.setItem("news", test_int.news);
      return;
    }
    
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var doc = JSON.parse(xhr.responseText);
      if(doc.status !== "ok" || doc.sources.length === 0) return;
      test_int.news = [];
      for(let i = 0; i < doc.sources.length; i++)
        test_int.news.push(doc.sources[i].id);
      localStorage.setItem("news", test_int.news);
    };
    xhr.open("GET", "https://newsapi.org/v1/sources?language=en&category=" + int);
    xhr.send();
  }
}
test_int.news = localStorage.getItem("news") || ["google-news"];

getNews(test_int.news);

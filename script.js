function addCard(title, text, link) {
  const body = document.getElementsByClassName("page-content")[0];
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
  
  body.appendChild(card);
}
     
const xhr = new XMLHttpRequest();
xhr.onload = function() {
  var doc = JSON.parse(xhr.responseText);
  for(var i = 0; i < doc.articles.length; i++) {
    addCard(doc.articles[i].title, doc.articles[i].description);
  }
};
xhr.open("GET", "https://news.google.com/news?output=rss");
xhr.send();

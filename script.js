function addCard(title, text, link) {
  const body = document.getElementsByClassName("page-content")[0];
  const card = document.createElement("div");
  card.classList.add("mdl-card", "mdl-shadow--2dp");
  
  const title = document.createElement("div");
  title.classList.add("mdl-card__title");
  
  const title_text = document.createElement("h2");
  title_text.innerHTML = title;
  title_text.classList.add("mdl-card__title-text");
  
  title.appendChild(title_text);
  card.appendChild(title);
  
  const sup_text = document.createElement("div");
  sup_text.classList.add("mdl-card__supporting-text");
  sup_text.innerHTML = text;
  card.appendChild(sup_text);
  
  body.appendChild(card);
}

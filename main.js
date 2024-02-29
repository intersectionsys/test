const $ = (query) => document.querySelector(query);
const detailsModal = $(".details-modal");
const cardModal = $(".card-modal");

$("#details").addEventListener("click", () => {
  detailsModal.classList.add("open");
});

$("#closeDetails").addEventListener("click", () => {
  detailsModal.classList.remove("open");
});

$("#openCard").addEventListener("click", () => {
  cardModal.classList.add("open");
});

$(".out").addEventListener("click", () => {
  cardModal.classList.remove("open");
});

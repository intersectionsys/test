const $ = (query) => document.querySelector(query);
const detailsModal = $(".details-modal");

$("#details").addEventListener("click", () => {
  detailsModal.classList.add("open");
});

$("#closeDetails").addEventListener("click", () => {
  detailsModal.classList.remove("open");
});

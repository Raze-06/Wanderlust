window.addEventListener("load", () => {
  const skeletons = document.getElementById("skeleton-container");
  const listings = document.getElementById("listings-container");

  if (!skeletons || !listings) return;

  skeletons.classList.add("fade-out");

  setTimeout(() => {
    skeletons.remove();
    listings.classList.remove("d-none");
    listings.classList.add("fade-in");
  }, 300);
});

let taxToggle = document.getElementById("switchCheckDefault");

taxToggle.addEventListener("change", () => {
  let amounts = document.querySelectorAll(".amount");

  amounts.forEach((amountEl) => {
    let basePrice = parseFloat(amountEl.dataset.price);

    if (taxToggle.checked) {
      let finalPrice = basePrice * 1.18;
      amountEl.innerText =
        finalPrice.toLocaleString("en-IN") + " / night (includes 18% GST)";
    } else {
      amountEl.innerText = basePrice.toLocaleString("en-IN") + " / night";
    }
  });
});

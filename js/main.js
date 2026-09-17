(function () {
  var WA = "9230012345678";
  var WA_LINK = "https://wa.me/" + WA + "?text=" + encodeURIComponent("Hi Corals by Tabassum! I'd like to order a piece.");
  var INSTA = "https://www.instagram.com/coralsbytabassum";

  document.querySelectorAll(".nav-cta").forEach(function (el) {
    el.href = WA_LINK;
  });
  document.querySelectorAll(".wa-float").forEach(function (el) {
    el.href = WA_LINK;
  });
  document.querySelectorAll(".insta-link").forEach(function (el) {
    el.href = INSTA;
  });

  var burger = document.querySelector(".hamburger");
  if (burger) {
    burger.addEventListener("click", function () {
      document.querySelector(".nav").classList.toggle("open");
    });
  }

  function money(n) {
    return "Rs. " + n.toLocaleString("en-PK");
  }

  function card(p, showLink) {
    var badge = p.badge
      ? '<span class="badge ' + p.badge + '">' + p.badge + "</span>"
      : "";
    var old = p.oldPrice
      ? '<span class="price old">' + money(p.oldPrice) + "</span>"
      : "";
    var order = WA_LINK + encodeURIComponent("\n\nI want to order: " + p.name + " (" + money(p.price) + ")");
    return (
      '<a class="product-card" href="' + (showLink ? "product.html?id=" + p.id : "javascript:void(0)") + '">' +
      '<div class="product-thumb">' + badge + '<img src="' + p.image + '" alt="' + p.name + '"></div>' +
      '<div class="product-body">' +
      '<h3>' + p.name + "</h3>" +
      '<span class="product-cat">' + p.category + "</span>" +
      '<div class="product-price"><span class="price">' + money(p.price) + "</span>" + old + "</div>" +
      "</div></a>"
    );
  }

  function renderProducts(target, list, showLink) {
    var el = document.querySelector(target);
    if (!el) return;
    el.innerHTML = list
      .map(function (p) {
        return card(p, showLink);
      })
      .join("");
  }

  var bestsellers = PRODUCTS.filter(function (p) {
    return p.badge === "best";
  }).concat(PRODUCTS.filter(function (p) {
    return p.badge === "sale";
  })).slice(0, 4);

  renderProducts("#bestsellers", bestsellers, true);
  renderProducts("#all-products", PRODUCTS, true);

  var filterBtns = document.querySelectorAll(".filter");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-filter");
      var count = 0;
      document.querySelectorAll("#all-products .product-card").forEach(function (cardEl) {
        var inCat = cat === "all" || cardEl.querySelector(".product-cat").textContent === cat;
        cardEl.classList.toggle("hide", !inCat);
        if (inCat) count++;
      });
      var countEl = document.querySelector(".shop-count");
      if (countEl) countEl.textContent = "Showing " + count + " piece" + (count === 1 ? "" : "s");
    });
  });

  var productPage = document.querySelector("[data-product]");
  if (productPage) {
    var id = new URLSearchParams(location.search).get("id");
    var p = PRODUCTS.filter(function (x) {
      return x.id === id;
    })[0] || PRODUCTS[0];
    document.querySelector(".breadcrumb [data-name]").textContent = p.name;
    document.querySelector(".detail-img img").src = p.image;
    document.querySelector(".detail-info h1").textContent = p.name;
    document.querySelector("[data-category]").textContent = p.category;
    document.querySelector("[data-price]").textContent = money(p.price);
    document.querySelector("[data-old]").textContent = p.oldPrice ? money(p.oldPrice) : "";
    document.querySelector("[data-desc]").textContent = p.desc;
    document.title = p.name + " — Corals by Tabassum";
    var order = WA_LINK + encodeURIComponent("\n\nI'd like to order: " + p.name + " (" + money(p.price) + ")");
    document.querySelectorAll("[data-order]").forEach(function (el) {
      el.href = order;
    });
    renderProducts("#related", PRODUCTS.filter(function (x) {
      return x.id !== p.id;
    }).slice(0, 4), true);
  }

  var form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg =
        "New order request from website:%0A%0A" +
        "Name: " + encodeURIComponent(form.name.value) + "%0A" +
        "City: " + encodeURIComponent(form.city.value) + "%0A" +
        "Item: " + encodeURIComponent(form.item.value) + "%0A" +
        "Notes: " + encodeURIComponent(form.notes.value);
      window.open("https://wa.me/" + WA + "?text=" + msg, "_blank");
      var msgEl = document.querySelector(".form-msg");
      msgEl.classList.add("show");
    });
  }
})();
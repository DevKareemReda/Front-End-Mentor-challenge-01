let accordionBanel = document.querySelectorAll(".accordion-banel");
accordionBanel.forEach(el => {
  
  el.onclick = function () {

    this.classList.toggle("is-visible");
    accordionBanel.forEach(rmv => {
      if (rmv !== el)
        rmv.classList.remove("is-visible")  
    })


    if (this.classList.contains("is-visible")) {

      this.nextElementSibling.classList.add("is-visible")

    } else {

      this.nextElementSibling.classList.remove("is-visible")

    }
  }
  
})

var addClass = function (element) {
  return document.querySelector(element);
};
var addTag = function (element) {
  return document.createElement(element);
};
var filmsWrapper = addClass(".filmsWrapper");
var typeSelect = addClass(".typeSelect");
var BtnSearch = addClass(".Search");
var FormSearch = addClass(".Form");
var NameSearch = addClass(".Name-search");
var sortSelect = addClass(".sortSelect");
var searchNumber = addClass(".searchNumber");
var main = addClass(".main");
var bookmarkerLike = addClass(".bookmarker-like");
var modalTitle = addClass(".modal-title");
var modalBody = addClass(".modal-body");
var searchRating = addClass(".searchRating");

var filmsFunction = function (array) {
  filmsWrapper.innerHTML = '';
  searchNumber.textContent = "Search results: " + array.length + " movies";
  array.forEach(function (film) {
    var filmArticle = addTag("article");
    var filmImg = addTag("img");
    var filmImgYear = addTag("img");
    var filmImgRating = addTag("img");
    var filmTitle = addTag("h3");
    var filmYear = addTag("span");
    var filmRating = addTag("span");
    var filmYoutubeId = addTag("a");
    var filmBtnInfo = addTag("button");
    var filmBtnBookMark = addTag("button");
    var filmYearText = addTag("p")
    var filmRatingText = addTag("p")
    var filmBtnText = addTag("p")
    var filmCardBody = addTag("div")
    var filmCard = addTag("div")


    filmImg.src = film.smallThumbnail;
    filmImg.classList.add("movie__poster");
    filmImg.classList.add("card-img-top");
    filmImg.style.width = 350 + "px"
    filmImg.style.height = 200 + "px"

    filmTitle.textContent = film.title;
    filmTitle.classList.add("movie__title");
    filmTitle.classList.add("h5");

    filmRatingText.classList.add("card-text")

    filmImgYear.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8F_%28ei%29.svg/1200px-%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8F_%28ei%29.svg.png"
    filmImgYear.alt = "calendar";
    filmImgYear.style.width = 25 + "px"
    filmImgYear.style.height = 25 + "px"
    filmImgYear.classList.add("m-2");

    filmYear.textContent = film.year;
    filmYear.classList.add("movie__year")

    filmRatingText.classList.add("card-text")
    filmImgRating.src = "https://image.flaticon.com/icons/png/128/1040/1040230.png"
    filmImgRating.alt = "star";
    filmImgRating.classList.add("m-2");
    filmImgRating.style.width = 25 + "px"
    filmImgRating.style.height = 25 + "px"
    filmRating.textContent = film.imdbRating;
    filmRating.classList.add("movie__rating");

    filmBtnText.classList.add("card-text");
    filmBtnText.classList.add("d-flex");
    filmBtnText.classList.add("flex-column");
    filmBtnText.classList.add("flex-md-row");
    filmBtnText.classList.add("flex-wrap");
    filmBtnText.classList.add("justify-content-around");
    
    filmYoutubeId.textContent = "Watch Trailer";
    filmYoutubeId.classList.add("movie__trailer-link")
    filmYoutubeId.classList.add("m-3")
    filmYoutubeId.classList.add("m-xl-0")
    filmYoutubeId.classList.add("btn")
    filmYoutubeId.classList.add("btn-outline-primary")
    filmYoutubeId.classList.add("btn-sm")
    filmYoutubeId.href = "https://www.youtube.com/watch?v=" + film.youtubeId;

    filmBtnInfo.textContent = "More Info";
    filmBtnInfo.setAttribute('id', 'moreInfo');
    filmBtnInfo.type = "button";
    filmBtnInfo.classList.add("FilmBtnInfo");
    filmBtnInfo.classList.add("m-1");
    filmBtnInfo.classList.add("m-xl-0");
    filmBtnInfo.classList.add("btn");
    filmBtnInfo.classList.add("btn-outline-info");
    filmBtnInfo.classList.add("btn-sm");
    filmBtnInfo.classList.add("js-movie-modal-opener");
    filmBtnInfo.dataset.bsTarget = "#movie-info-modal";
    filmBtnInfo.dataset.bsToggle = "modal";
    filmBtnInfo.dataset.id = film.imdbId;

    filmBtnBookMark.textContent = "Bookmark"
    filmBtnBookMark.type = "button";
    filmBtnBookMark.classList.add("FilmBtnBookmark")
    filmBtnBookMark.classList.add("m-1")
    filmBtnBookMark.classList.add("m-xl-0")
    filmBtnBookMark.classList.add("btn")
    filmBtnBookMark.classList.add("btn-outline-success")
    filmBtnBookMark.classList.add("btn-sm")
    filmBtnBookMark.classList.add("js-movie-bookmark")
    filmBtnBookMark.dataset.id = film.imdbId;

    filmCardBody.classList.add("card-body");
    
    filmCard.classList.add("card");

    filmArticle.classList.add("search-results__item");
    filmArticle.classList.add("movie");
    filmArticle.classList.add("col-sm-6");
    filmArticle.classList.add("mb-4");

    filmsWrapper.classList.add("search-results");
    filmsWrapper.classList.add("row");

    filmCard.append(filmImg)
    filmCardBody.append(filmTitle)
    filmYearText.append(filmImgYear)
    filmYearText.append(filmYear)
    filmCardBody.append(filmYearText)
    filmRatingText.append(filmImgRating)
    filmRatingText.append(filmRating)
    filmCardBody.append(filmRatingText)
    filmBtnText.append(filmYoutubeId)
    filmBtnText.append(filmBtnInfo)
    filmBtnText.append(filmBtnBookMark)
    filmCardBody.append(filmBtnText)
    filmArticle.append(filmCard)
    filmArticle.append(filmCardBody)
    filmsWrapper.append(filmArticle)


  });
  return filmsWrapper
}



// filmsFunction(films)
var likeFilms = []
main.addEventListener("click", function (evt) {
  if (evt.target.matches("#moreInfo")) {
    var clickedId = evt.target.dataset.id;
    var InfoFilms = films.find(film => film.imdbId == clickedId)

    modalTitle.textContent = InfoFilms.title;
    modalBody.textContent = InfoFilms.summary;
  }



  if (evt.target.matches(".FilmBtnBookmark")) {
    var clickedId = evt.target.dataset.id;
    bookmarkerLike.innerHTML = ""
    var isThereLikeFilm = likeFilms.some(function (film) {
      return film.imdbId === clickedId;
    })

    if (!isThereLikeFilm) {
      var foundFilms = films.find(function (film) {
        return film.imdbId === clickedId;
      })
      likeFilms.push(foundFilms);
    }



    likeFilms.forEach(function (film) {
      var likeFilmItem = addTag("li");
      var likeFilmTitle = addTag("h5");
      var likeFilmRemove = addTag("button");
      likeFilmRemove.textContent = "Remove"
      likeFilmRemove.classList.add("btn")
      likeFilmRemove.classList.add("btn-sm")
      likeFilmRemove.classList.add("btn-danger")
      likeFilmRemove.classList.add("js-remove-bookmarked-movie-button")

      likeFilmItem.classList.add("bookmarked-movie")
      likeFilmItem.classList.add("list-group-item")

      likeFilmTitle.textContent = film.title;
      likeFilmTitle.type = "button";
      likeFilmItem.append(likeFilmTitle);
      likeFilmItem.append(likeFilmRemove);
      bookmarkerLike.append(likeFilmItem);
    })

  }
});








var typeWrapper = function () {
  var typeArray = [];


  films.forEach(function (film) {
    film.categories.forEach(function (categories) {
      if (!typeArray.includes(categories)) {
        typeArray.push(categories)
      }
    })
  })
  return typeArray;
}

var typeArray = typeWrapper()
typeArray.forEach(function (categories) {
  var typeOption = addTag("option");
  typeOption.value = categories;
  typeOption.textContent = categories;
  typeSelect.append(typeOption);
})

//type




var rating_desc = function (a, b) {
  return b.imdbRating - a.imdbRating;
}

var rating_asc = function (a, b) {
  return a.imdbRating - b.imdbRating;
}

var az = function (a, b) {
  if (a.title > b.title) {
    return 1
  }
  if (a.title < b.title) {
    return -1
  }
  return 0
}

var za = function (a, b) {
  if (a.title > b.title) {
    return -1
  }
  if (a.title < b.title) {
    return 1
  }
  return 0
}

var year_desc = function (a, b) {
  return b.year - a.year
}
var year_asc = function (a, b) {
  return a.year - b.year
}

var sortFunctions = {
  "0": rating_desc,
  "1": rating_asc,
  "2": az,
  "3": za,
  "4": year_desc,
  "5": year_asc
}

FormSearch.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var NameSearchValue = new RegExp(NameSearch.value, "gi");
  var FiltrWrapper = films.filter(function (film) {
    var searchRatingValue = Number(searchRating.value) === 0 ? true: film.imdbRating >= searchRating.value ;
    var doesTitleMach = film.title.match(NameSearchValue);
    var doesCategoriesIncludes = typeSelect.value === 0 ? true : film.categories.includes(typeSelect.value)
    if (typeSelect.value === "0") {
      return true && doesTitleMach && searchRatingValue;
    }
    return doesCategoriesIncludes && doesTitleMach && searchRatingValue;
  }).sort(sortFunctions[sortSelect.value]);
  filmsFunction(FiltrWrapper);
})
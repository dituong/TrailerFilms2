document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    const movies = [
        { title: "john wick 4", link: "detail.html#johnwick4" },
        { title: "avatar 2", link: "detail.html#avatar2" },
        { title: "the batman", link: "detail.html#thebatman" },
        { title: "avengers", link: "detail.html#avengers" },
        { title: "inception", link: "detail.html#inception" },
        { title: "spider man", link: "detail.html#spiderman" },
        { title: "mission impossible", link: "detail.html#mi7" },
        { title: "the dark knight", link: "detail.html#thedarkknight" },
        { title: "the matrix", link: "detail.html#thematrix" },
        { title: "top gun", link: "detail.html#topgun" }
    ];

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const keyword = searchInput.value.trim().toLowerCase();
        if (keyword === "") return;

        const result = movies.find(movie =>
            movie.title.includes(keyword)
        );

        if (result) {
            window.location.href = result.link;
        } else {
            alert("Không tìm thấy phim!");
        }
    });
});

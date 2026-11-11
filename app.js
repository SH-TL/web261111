// app.js : 영화 배열을 다루는 함수 6개 / 정승현(25) / 11주차 
// average : 영화 배열 ⇒ 평균 평점(숫자) 

//입력
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
//출력   
console.log("평균:", average(movies));

//입력
function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m.rating;
        }
    }
    return top;
}
//출력
console.log("최고", best(movies).title);

//입력
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}
//출력
console.log("8점 이상:", filterByRating(movies, 8).length + "편");

//입력
function sortByRating(list) {
    return [...list].sort((a, b) => b.rating - a.rating);
}
//출력
const sorted = sortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);

//입력
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}
//출력
console.log(yearsSince(movies[0].date) + "년 전 개봉");

//입력
function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}
//출력
console.log(posterUrl(movies[0].poster, "w342"));

document.title = "내 영화 " + movies.length + "편";
console.table(sortByRating(movies));
document.getElementById("out").textContent = "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies).title;
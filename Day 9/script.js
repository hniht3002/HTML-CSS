const getInput = document.querySelector('input');
var getName = document.querySelector('.name h3')
var getTemprature = document.querySelector('.temperature p span')
var getCurrentWeather = document.querySelector('.weather p')
var getVisibility = document.querySelector('.visibility')
var getWind = document.querySelector('.wind')
var getCloud = document.querySelector('.cloud')
var getTime = document.querySelector('.time p')

getInput.addEventListener('keydown', function (e) {
    var location = getInput.value.trim().replace(/\s/g, '%20')
    if(e.which == 13) {
        getWeather(location)
        getInput.value = ''
    }
})

getWeather('Moscow')


const renderWeather = (data) => {
    getName.textContent = `${data.name}, ${data.sys.country}`
    getTime.textContent = new Date().toLocaleString()
    getTemprature.textContent= `${Math.round(data.main.temp)}`
    getCurrentWeather.textContent = `${data.weather[0].main}`
    getVisibility.textContent = `${data.visibility}(m)`
    getWind.textContent = `${data.wind.speed}(m/s)`
    getCloud.textContent = `${data.clouds.all}(%)`
}
function getWeather(location) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod == '404') {
                alert('City not found, please try again')
            } else {
                renderWeather(data)
            }
        })
        .catch((error) => console.log(error));
}


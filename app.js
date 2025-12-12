const apiKey = "767ae50caa38f59101259d1873c673e7";

let search = document.getElementById("search");
search.addEventListener("click", async function () {
    let city = document.getElementById("city").value;
    let main = document.querySelector(".main");

    console.log("city ==>", city); 
    try {
        main.innerHTML = "";

        main.innerHTML = `
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>    
        `
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await res.json();
        console.log("data ==>", data);
        main.innerHTML = "";

    let iconCode = data.weather[0].icon;
    let icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let temp = Math.floor (data.main.temp);
    let cityName = data.name;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let condition = data.weather[0].main;
    main.innerHTML = `
     <div class="result">
            <img src='${icon}' alt="Weather Icon" class="d-block mx-auto img-fluid" 
     style="width: 130px; height: 130px;">
            <h1 class="text-center mt-3">${cityName}</h1>
            <h1 class="text-center mt-3">${temp}°C</h1>
            <h4 class="text-center mt-3">${condition}</h4>

            

            <div class="d-flex justify-content-center gap-5 mt-4">
                <div>
                    <h5 class="text-center">Humidity</h5>
                    <p class="text-center">${humidity}%</p>
                </div>
                <div>
                    <h5 class="text-center">Wind Speed</h5>
                    <p class="text-center">${wind}km/h</p>
                </div>
            </div>

            </div>
    `
    } catch (error) {
        console.log("error ==>", error);
    }
});
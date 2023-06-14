const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b8d65d9e72msh090beab34cfff6bp1716a5jsna78bd864b9bd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async fucntion fetchCars() {
    cosnt headers = {
    "X-RapidAPI-Key": "b8d65d9e72msh090beab34cfff6bp1716a5jsna78bd864b9bd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
}

}


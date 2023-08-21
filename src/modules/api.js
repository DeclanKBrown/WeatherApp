const API = (() => {
  let data = {}

  async function get(location = 'Melbourne') {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=cec82327ff6049df98a45230232008&q=${location}`,
        { mode: 'cors' },
      )
      const responseData = await response.json()
      updateData(responseData)
    } catch (error) {
        //swallow error
    }
  }

  function updateData(response) {
    data = {
      location: `${response.location.country}, ${response.location.name}`,
      time: response.location.localtime,
      temp: response.current.temp_c,
      condition: response.current.condition.text,
      feels_like: response.current.feelslike_c,
      wind: `${response.current.wind_kph} ${response.current.wind_dir}`,
      humidity: response.current.humidity,
      uv: response.current.uv,
      vis: response.current.vis_km,
      cloud: response.current.cloud,
      precip: response.current.precip_mm,
    }
  }

  function getData() {
    return data
  }

  return { get, getData }
})()

export default API

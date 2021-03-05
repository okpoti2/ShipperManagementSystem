//API BASE URL
const API_URL = "vessel/?format=json&uicontext=detail"

//Fetch consignments
const fetchVessels = async (base_url) => {
    try {
        const res = await fetch(base_url.concat(API_URL))
        const data =  await res.json()
        return data.results
    } catch (e){
      console.log(e)
      //return dummydata.results
    } 

  }

export {fetchVessels}
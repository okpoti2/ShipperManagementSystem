//API BASE URL
const API_URL = "shipper/?format=json&uicontext=detail"

//Fetch consignments
const fetchShippers = async (base_url) => {
    try {
        const res = await fetch(base_url.concat(API_URL))
        const data =  await res.json()
        return data.results
    } catch (e){
      console.log(e)
      //return dummydata.results
    } 

  }

export {fetchShippers}
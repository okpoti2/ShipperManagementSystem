
//API BASE URL
const API_URL = 'consignment/?format=json&uicontext=detail'

//Fetch consignments
const fetchConsignments = async (base_url) => {
    try {
        const res = await fetch(base_url.concat(API_URL))
        const data =  await res.json()
        return data.results
    } catch (e){
      console.log(e)
    } 

  }

export {fetchConsignments}
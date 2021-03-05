//API BASE URL
const API_URL = "consignment/?format=json&uicontext=detail"

//Fetch consignments
const fetchConsignments = async (base_url) => {
    try {
        const res = await fetch(base_url.concat(API_URL))
        const data =  await res.json()
        return data.results
    } catch (e){
      console.log(e)
      //return dummydata.results
    } 

  }

// Add consignments
const addConsignment = async(base_url,consignment) => {
    try{
        const api_url = base_url.concat("consignment/?format=json");
        const res = await fetch(api_url,
          {method:'POST',
            headers:{
              'Content-type':'application/json',
              'Authorization': 'Basic '+btoa('evans:evans.sowah'),
            },
            body:consignment
        })
        return res
    } catch(e){
      console.log(e)
  }
}

export {fetchConsignments, addConsignment}
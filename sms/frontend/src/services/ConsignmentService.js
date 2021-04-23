//API BASE URL
const API_URL = "consignment/?format=json&uicontext=detail"

//Fetch consignments
const fetchConsignments = async (base_url) => {
    try {
        const res = await fetch(base_url.concat(API_URL))
        const data =  await res.json()
        return data.results.sort(comp)
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
            body:JSON.stringify(consignment)
        })
        return res
    } catch(e){
      console.log(e)
  }
}

// Sorting the consignments by date to always show the most recent
function comp(a, b) {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}



export {fetchConsignments, addConsignment}
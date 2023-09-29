async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }
  
  
  export async function signup(context) {
    console.log("before fetch")
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/accounts/signup",payload)
    console.log(body, "API CALL")
    return body
  }
  
  export async function login(context) {
    console.log(context, "this is context")
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/accounts/get-token", payload)
    console.log(body.token)
    return body.token
  }


  export async function getMovies(searchParam) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("token")}`
      }  }
    const body = await basicFetch(`http://localhost:8000/movies/?name=${searchParam}`, payload)
    return body
  }

  export async function getNewMovies() {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("token")}`
      }  }
    const body = await basicFetch("http://localhost:8000/movies/new", payload)
    return body
  }
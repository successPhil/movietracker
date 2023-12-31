const base_url = import.meta.env.VITE_BASE_URL
const API_BASE_URL = `http://${base_url}/api`;
// const API_BASE_URL = `http://localhost:8000/api`;

async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

export async function signup(context) {
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(`${API_BASE_URL}/accounts/signup`,payload)
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
  const body = await basicFetch(`${API_BASE_URL}/accounts/get-token`, payload)
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
  const body = await basicFetch(`${API_BASE_URL}/movies/?name=${searchParam}`, payload)
  return body
}

export async function getNewMovies() {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    }  }
  const body = await basicFetch(`${API_BASE_URL}/movies/new`, payload)
  return body
}

export async function getMovieDetail(searchParam) {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    }  }
  const body = await basicFetch(`${API_BASE_URL}/movies/detail?id=${searchParam}`, payload)
  return body
}

export async function addToWatchlist(movieId, movieName, movieImg){
  try {
    const response = await fetch(`${API_BASE_URL}/watchlist/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        movie_id: movieId,
        movie_title: movieName,
        movie_img: movieImg
      }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle success (optional)
  } catch (error) {
    console.error('Error:', error);
    // Handle error (optional)
  }
}

export async function removeFromWatchlist (movieId) {
  try {
    const response = await fetch(`${API_BASE_URL}/watchlist/remove/${movieId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
    });
    if (response.ok) {
      console.log('good delete')
    } else {
      console.error('Error removing movie from watchlist');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


export async function getWatchlist() {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("token")}`
    }  }
  const body = await basicFetch(`${API_BASE_URL}/watchlist/`, payload)
  return body
}
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

// get people from starwars api
export async function getPeople(page?: number) {
  try {
    const response = await api.get('/people', {
      params: {
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// search people from starwars api
export async function searchPeople(name: string) {
  try {
    const response = await api.get('/people', {
      params: {
        search: name,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

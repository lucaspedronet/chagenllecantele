const { APPLICATION_URL } = process.env;
import { Point } from '../hooks/useFetch';

async function fetchPoints(id: string, body: Point[]): Promise<void> {
  console.log(id);
  console.log(body);
  return fetch(`http://localhost:3000/points/${id}`, {
    method: 'POST',
    body,
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json().then(data => {
        return data;
      });
    })
    .catch(error => {
      throw new Error(error);
    });
}

async function fetchPointsId(id: string): Promise<void> {
  return fetch(`${APPLICATION_URL}/points/${id}`, {
    method: 'GET',
    headers: {
      'content-length': '39',
    },
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json().then(data => {
        return data;
      });
    })
    .catch(error => {
      throw new Error(error);
    });
}

async function fetchPointsAll(): Promise<void> {
  return fetch('http://localhost:3000/points/', {
    method: 'GET',
    headers: {
      'content-length': '39',
    },
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json().then(data => {
        return data;
      });
    })
    .catch(error => {
      throw new Error(error);
    });
}

export { fetchPointsAll, fetchPoints, fetchPointsId };

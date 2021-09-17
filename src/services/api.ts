import axios from 'axios';

async function fetchPoints(id: string, body: any[]): Promise<void> {
  return fetch(`http://localhost:3000/points/${id}`, {
    method: 'POST',
    headers: {
      'content-length': '39',
    },
    body,
  })
    .then(response => {
      if (!response.ok) {
        console.warn(response.status);
        throw new Error('Error');
      }

      return response.json().then(data => {
        console.log(data);
        return data;
      });
    })
    .catch(error => {
      throw new Error(error);
    });
}

async function fetchPointsId(id: string): Promise<void> {
  return fetch(`http://localhost:3000/points/${id}`, {
    method: 'GET',
    headers: {
      'content-length': '39',
    },
  })
    .then(response => {
      if (!response.ok) {
        console.warn(response.status);
        throw new Error('Error');
      }

      return response.json().then(data => {
        console.log(data);
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
    .then(response => {
      if (!response.ok) {
        console.warn(response.status);
        throw new Error('Error');
      }

      return response.json().then(data => {
        console.log(data);
        return data;
      });
    })
    .catch(error => {
      throw new Error(error);
    });
}

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export { api, fetchPointsAll, fetchPoints, fetchPointsId };

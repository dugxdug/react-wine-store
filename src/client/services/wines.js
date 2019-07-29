import request from 'superagent';

function getWines(year) {
  return request.get('http://localhost:3000/api/v1/wines')
    .query({ vintage: year})
    .then(res => {
      const data = JSON.parse(res.text);
      return data;
    });
}

export default {
  getWines
};

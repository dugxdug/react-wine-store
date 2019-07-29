import wineService from '../services/wines';

function fetchWines() {
  return function(dispatch) {
    return wineService.getWines()
      .then(({ wines, vintage }) => {
        dispatch({
          type: 'FETCH_WINES_SUCCESS',
          payload: {
            wines,
            vintage
          }
        });
      });
  };
}

export {
  fetchWines
};

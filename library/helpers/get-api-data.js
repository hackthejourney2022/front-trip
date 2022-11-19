import shuffle from 'lodash/shuffle';

export const processAPIData = (apiData) => {
  let fetchData = {};
  if (apiData) {
    apiData.forEach((item, key) => {
      item = []
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }
  const data = fetchData ? fetchData.data : [];
  return data;
};

export const searchedData = (processedData) => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = shuffle(processedData.slice(0, randNumber));
  return data;
};

export const searchStateKeyCheck = (state) => {
  for (var key in state) {
    if (
      state[key] !== null &&
      state[key] != '' &&
      state[key] != [] &&
      state[key] != 0 &&
      state[key] != 100
    ) {
      return true;
    }
  }
  return false;
};

export const paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

export const getAPIData = async (apiUrl) => {
  const promises = apiUrl.map(async () => {
    return {
      data: ''
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};
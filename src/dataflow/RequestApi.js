import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export const fetchCoordinates = async(info) => {
  const parameters = info.replace(/ /g, '+');
  const { data } = await connection.get(`/json?components=country:BR&address=${parameters}&key=${process.env.REACT_APP_GOOGLE_KEY}`);

  return data;
};

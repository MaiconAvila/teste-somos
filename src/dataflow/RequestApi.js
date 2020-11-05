import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export const fetchCoordinates = async(info) => {
  const parameters = info.replace(/ /g, '+');
  const { data } = await connection.get(`json?components=country:BR&address=${parameters}&key=${process.env.REACT_APP_GOOGLE_KEY}`);

  return data;
};

export const fetchBounds = async(info) => {
  const { data } = await connection.get(`json?latlng=${info}&location_type=ROOFTOP&result_type=street_address&key=${process.env.REACT_APP_GOOGLE_KEY}`);

  return data;
}

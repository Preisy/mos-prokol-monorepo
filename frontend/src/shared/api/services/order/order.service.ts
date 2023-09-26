import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export interface OrderDto {
  name: string;
  phoneNumber: string;
  question: string;
}

export async function sendOrder(data: OrderDto) {
  const response = await api.post('/mail', data);
  console.log(response);
}

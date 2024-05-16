import BASE_URL from '@/lib/baseUrl';
import { fetchWithToken } from '@/lib/fetchLib';

const getAllWarehouses = async () => {
  const response = await fetchWithToken(`${BASE_URL}/warehouses`);
  const data = await response.json();

  const warehouseData = data.data.warehouses;

  return warehouseData;
};

const getWarehouseDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/warehouses/${id}`);
  const warehouseDetails = await response.json();

  return warehouseDetails;
};

const addWarehouse = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/warehouses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { getAllWarehouses, getWarehouseDetails, addWarehouse };

import BASE_URL from '@/lib/baseUrl';
import { fetchWithToken } from '@/lib/fetchLib';

const getAllCategories = async (
  contains = '',
  page = 1,
  limit = 10,
  orderBy = 'id',
  orderType = 'asc'
) => {
  let response = null;
  try {
    if (!contains) {
      response = await fetchWithToken(
        `${BASE_URL}/categories?${new URLSearchParams({
          page,
          limit,
          orderBy,
          orderType
        })}`
      );
    } else {
      response = await fetchWithToken(
        `${BASE_URL}/categories?${new URLSearchParams({
          page,
          limit,
          orderBy,
          orderType,
          contains
        })}`
      );
    }
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== 'success') {
      throw new Error(message);
    }
    const { data } = responseJson;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

const getCategoryDetail = async (id) => {
  try {
    const respose = await fetchWithToken(`${BASE_URL}/categories/${id}`);
    const responseJson = await respose.json();
    const { status, message } = responseJson;
    if (status !== 'success') {
      throw new Error(message);
    }
    const { data } = responseJson;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

const addCategory = async (payload) => {
  try {
    const url = `${BASE_URL}/categories`;
    const response = await fetchWithToken(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const responseJson = await response.json();
    const { data, status, message } = responseJson;
    if (status !== 'success') {
      throw new Error(message);
    }
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

const editCategory = async (id, payload) => {
  console.log(payload);
  try {
    const url = `${BASE_URL}/categories/${id}`;
    const response = await fetchWithToken(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

// eslint-disable-next-line consistent-return
const removeCategory = async (id) => {
  try {
    const removedCategory = await fetchWithToken(`${BASE_URL}/categories/${id}`, {
      method: 'DELETE'
    });
    return removedCategory;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const setCategoryProduct = async (productId, categoryId) => {
  try {
    const requestBody = {
      productId,
      categoryId
    };
    // console.log(productId, warehouseId, quantity);
    const response = await fetchWithToken(`${BASE_URL}/categories/set`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
    return responseJson;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export {
  getAllCategories,
  getCategoryDetail,
  addCategory,
  editCategory,
  removeCategory,
  setCategoryProduct
};

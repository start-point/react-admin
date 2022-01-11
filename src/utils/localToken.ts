import localforage from 'localforage';

/**
 * 获取本地Token
 */
export const getToken = async (): Promise<string | null> => {
  return await localforage.getItem('All_token');
};

/**
 * 设置存储本地Token
 */
export const setToken = async (token: string): Promise<boolean> => {
  try {
    await localforage.setItem('All_token', token);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 移除本地Token
 */
export const removeToken = async (): Promise<boolean> => {
  try {
    await localforage.removeItem('All_token');
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 清空 数据库 和 本地存储
 */
export const clear = async (): Promise<boolean> => {
  try {
    await localforage.clear();
    await sessionStorage.removeItem('user_name');
    return true;
  } catch (error) {
    return false;
  }
};

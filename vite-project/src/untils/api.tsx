import axios, { AxiosInstance, AxiosResponse,InternalAxiosRequestConfig } from 'axios';

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // 设置基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 默认请求头
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      // 使用 set 方法设置 Authorization 字段
      config.headers?.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做些什么，直接返回 data
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权的情况
          console.error('Unauthorized: Please log in again.');
          break;
        case 404:
          // 处理资源未找到的情况
          console.error('Resource not found.');
          break;
        // 其他状态码处理
        default:
          console.error('An error occurred:', error.response.status);
          break;
      }
    }
    return Promise.reject(error);
  }
);

// 封装通用的请求方法
export const request = {
  get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.get<T>(url, config).then((response) => response.data);
  },
  post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.post<T>(url, data, config).then((response) => response.data);
  },
  put<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.put<T>(url, data, config).then((response) => response.data);
  },
  delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return instance.delete<T>(url, config).then((response) => response.data);
  },
};

// 使用示例
// request.get('/users').then(data => console.log(data));
// request.post('/users', { name: 'John' }).then(data => console.log(data));
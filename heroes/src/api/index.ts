import axios from 'axios'

// TODO Work needs here
const useApi = () => {
  const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  })

  // loder element
  const loaderElement = document.getElementById('loader_div')!
  const showLoader = () => {
    loaderElement.style.display = 'block'
  }
  const hideLoader = () => {
    loaderElement.style.display = 'none'
  }

  axiosApi.interceptors.request.use(
    (config) => {
      //   config.headers.common['Authorization'] =
      //     'Bearer ' + localStorage.getItem('token')
      //   config.headers.common['Accept-Language'] = i18n.language
      // Do something before request is sent
      showLoader()
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    },
  )
  axiosApi.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of
      // 2xx cause this function to trigger
      // Do something with response data
      hideLoader()
      return response
    },
    (error) => {
      const status =
        error.status || (error.response ? error.response.status : 0)
      // Any status codes that falls outside the range
      // of 2xx cause this function to trigger
      // Do something with response error
      hideLoader()
      return Promise.reject(error)
    },
  )

  return { axiosApi }
}

export { useApi }

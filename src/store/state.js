let defaultcity = '上海'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (error) {

}

export default {
  city: defaultcity
}
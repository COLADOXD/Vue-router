import axios from "axios";
import { ref } from "vue";

export const userGetData = () => {
  const data = ref(null);
  const error = ref();
  const loading = ref(true);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (e) {
      console.log(e);
      error.value = "server Error: ";
    } finally {
      loading.value = false;
    }
  };

  return {
    getData,
    data,
    loading,
    error,
  };
};

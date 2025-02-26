import { BASE_URL_API } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  login: string;
  password: string;
}
const useLogin = () => {
  const router = useRouter();
  const loginUser = async (payload: LoginPayload) => {
    try {
      const response = await axios.post(`${BASE_URL_API}/users/login`, payload);
      toast.success("Login Success");
      router.push("/");
      return response.data;
    } catch (error) {
      toast.error("Login gagal");
    }
  };

  return { loginUser };
};

export default useLogin;

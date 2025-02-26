import { BASE_URL_API } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}
const useRegister = () => {
  const router = useRouter();
  const registerUser = async (payload: RegisterPayload) => {
    try {
      const response = await axios.post(
        `${BASE_URL_API}/users/register`,
        payload,
      );
      toast.success("Register Success");
      router.push("/login");
      return response.data;
    } catch (error) {
      toast.error("Registrasi gagal");
    }
  };

  return { registerUser };
};

export default useRegister;

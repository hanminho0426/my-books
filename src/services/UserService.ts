import axios from "axios";
import { LoginReqType } from "../types";

const UESR_API_URL = "https://api.marktube.tv/me";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(UESR_API_URL, reqData);
    return response.data.token;
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(UESR_API_URL, {
      headers: { Authorization: `Beater ${token}` },
    });
  }
}

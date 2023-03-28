import { DataService } from "src/app/services/config-service/config.service"
interface IUser {


}
export interface User {
  name: string;
  password: string;
  photo?: string;
  token?: string;
  id: number;
}

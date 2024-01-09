import { Calculate } from "./calculate.model";
import { UserInfo } from "./personalInfo.model";

export interface Cdt {
    personalInfo?: UserInfo;
    calculate?: Calculate;
}
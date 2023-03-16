import {Moment} from "momnet";

export const formatDate = (date: Date):string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDay() < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1;
    return `${year}.${month}.${day}`
}
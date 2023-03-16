import {Moment} from "moment";
import moment from "moment";

export const rules = {
    required: (message: string = "Обязательное поле") => ({
      required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_:any, value: Moment) {
            // @ts-ignore
            if(value.isSameOrAfter(moment())) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        }
    })
}
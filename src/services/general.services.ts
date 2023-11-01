import { IBooks } from "../models/IBooks"
import { HTTP_CLIENT } from "../utils/config"

export const Service = async (): Promise<IBooks> => {
    return await HTTP_CLIENT
        .get<IBooks>('/api/v1/books?_quantity=100&_locale=en_US').then((response) =>
            response.data
        )
}
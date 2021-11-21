import axios, { AxiosError } from "axios";

export const calculateEquation = async (
    equation: string
  ): Promise<any> => {

    try {
      const response: any = await axios({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        url: `http://localhost:9000/calculator/calculate?calculation=${encodeURIComponent(equation)}`,
      });
      return response;
    } catch (error: AxiosError | any){
      return error.response; 
    }
  };
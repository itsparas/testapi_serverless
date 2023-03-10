import { formatJSONResponse } from "@libs/api-gateway";


export const hello:any = async (event) => {
  const message = JSON.parse(event.body);
  return formatJSONResponse({message:`Hello ${message.name}, welcome to the exciting Serverless world!`});
};

// export const main = middyfy(hello);

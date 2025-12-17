import { CategoryServiceClient } from '../../../grpc/category_grpc_web_pb';

const client = new CategoryServiceClient(process.env.REACT_APP_HOST);

export { client };

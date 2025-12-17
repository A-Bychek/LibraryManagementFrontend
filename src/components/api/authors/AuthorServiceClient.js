import { AuthorServiceClient } from '../../../grpc/author_grpc_web_pb';

const client = new AuthorServiceClient(process.env.REACT_APP_HOST);

export { client };

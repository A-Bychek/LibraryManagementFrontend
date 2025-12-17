import { BookServiceClient } from '../../../grpc/book_grpc_web_pb';

const client = new BookServiceClient(process.env.REACT_APP_HOST);

export { client };

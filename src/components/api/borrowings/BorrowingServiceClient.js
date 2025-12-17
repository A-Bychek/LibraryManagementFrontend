import { BorrowingServiceClient } from '../../../grpc/borrowing_grpc_web_pb';

const client = new BorrowingServiceClient(process.env.REACT_APP_HOST);

export { client };

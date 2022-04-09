require('dotenv/config');
import { app, httpServer, server } from './app';

const PORT = process.env.PORT || 4000;
const runServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

// starting http server
runServer();

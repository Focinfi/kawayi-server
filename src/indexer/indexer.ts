import * as http from 'http';
import * as https from 'https';
import { Indexer } from "@ckb-lumos/indexer";

const httpAgent = new http.Agent({
	keepAlive: true
});
const httpsAgent = new https.Agent({
	keepAlive: true
});

const agent = function(_parsedURL) {
  if (_parsedURL.protocol == 'http:') {
    return httpAgent;
  } else {
    return httpsAgent;
  }
}

const uri = "http://127.0.0.1:8114";
export const indexer = new Indexer(uri, "indexed-data", { rpcOptions: { agent: agent(new URL(uri))}});
export function startIndexer() {
    indexer.startForever();
}
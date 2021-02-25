import * as https from 'https';
import { Indexer } from "@ckb-lumos/indexer";

const httpsAgent = new https.Agent({
	keepAlive: true
});

export const indexer = new Indexer("https://testnet.ckb.dev", "indexed-data", { rpcOptions: { agent: httpsAgent}});

export function startIndexer() {
    indexer.startForever();
}
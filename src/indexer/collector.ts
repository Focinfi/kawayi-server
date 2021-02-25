import { CellCollector } from "@ckb-lumos/indexer";
import { indexer } from './indexer';

export const cellCollector = new CellCollector(indexer, {
    lock: {
      code_hash:
        "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
      hash_type: "type",
      args: "0xda648442dbb7347e467d1d09da13e5cd3a0ef0e1",
    },
  });

import { CellCollector } from "@ckb-lumos/indexer";
import { indexer } from './indexer';

export const cellCollector = new CellCollector(indexer, {
    lock: {
      code_hash:
        "0x58c5f491aba6d61678b7cf7edf4910b1f5e00ec0cde2f42e0abb4fd9aff25a63",
      hash_type: "type",
      args: "0xa11e72cb616144c72cf033c9f2ea46c4537f6942",
    },
  });

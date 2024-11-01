import { createKeyPairSignerFromBytes, KeyPairSigner, createSolanaRpc } from '@solana/web3.js';
import { fetchPositionsForOwner, setDefaultFunder } from '@orca-so/whirlpools';
import * as fs from 'fs';

const keypairPath = process.env.KEYPAIR_PATH || '';
const rpcUrl = 'https://mainnetbeta-rpc.eclipse.xyz';

async function main(){
  const wallet = await loadKeypair(keypairPath);
  console.log("using wallet", wallet.address);  
  const rpc = createSolanaRpc(rpcUrl);
  setDefaultFunder(wallet);

  const positions = await fetchPositionsForOwner(rpc, wallet.address);
  console.log({ positions })
}

async function loadKeypair(filePath: string): Promise<KeyPairSigner> {
  const fileContents = fs.readFileSync(filePath , { encoding: "utf8" });
  const secretKeyArray = JSON.parse(fileContents);
  const wallet = await createKeyPairSignerFromBytes(new Uint8Array(secretKeyArray));
  return wallet;
}

main();
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

const RPC_URLS: { [chainId: number]: string } = {
  5: `https://goerli.infura.io/v3/${INFURA_KEY}`,
}
export const walletconnect = new WalletConnectConnector({
  rpc: { 5: RPC_URLS[5] },
  qrcode: true,
})

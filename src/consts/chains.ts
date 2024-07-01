import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 1234,
  //   domainId: 1234,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   publicRpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },

  // Including configs for some Solana chains by default
  xiontestnet1: {
    protocol: ProtocolType.Cosmos,
    domainId: 1360, // TODO not a real domain id
    chainId: 'xion-testnet-1',
    name: 'xiontestnet1',
    displayName: 'Xion',
    bech32Prefix: 'xion',
    slip44: 118,
    nativeToken: {
      name: 'Xion',
      symbol: 'XION',
      decimals: 6,
      denom: 'uxion',
    },
    isTestnet: true,
    // denom
    restUrls: [
      { http: 'https://xion-testnet-api.polkachu.com' },
      { http: 'https://api.xion-testnet-1.burnt.com' },
    ],
    rpcUrls: [
      { http: 'https://xion-testnet-rpc.polkachu.com' },
      { http: 'https://testnet-xion-rpc.lavenderfive.com' },
    ],
    grpcUrls: [{ http: 'https://grpc-xion.decentrio.ventures' }],
    blockExplorers: [],
    logoURI: '/logos/decentrio.svg',
    transactionOverrides: {
      gasPrice: '0.025',
      denom: 'uxion',
    },
  },
};

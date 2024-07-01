import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // Native Xion token to sepholia
    {
      standard: TokenStandard.CwHypCollateral,
      chainName: 'xiontestnet1',
      name: 'Xion',
      symbol: 'XION',
      decimals: 6,
      addressOrDenom: 'xion1q8f5ek03yys4uk07p9wq5ztyzf3757uw7d74hdl0440xth4ezzkqv8c6jl',
      collateralAddressOrDenom: 'uxion',
      connections: [
        {
          token: 'ethereum|sepolia|0xdF6AA39C8a4A545A34339E6eE9f3f0fe12d4B680',
        },
      ],
      logoURI: '/logos/decentrio.svg',
    },
    {
      standard: TokenStandard.ERC20,
      chainName: 'sepolia',
      name: 'Xion',
      symbol: 'XION',
      decimals: 6,
      addressOrDenom: '0xdF6AA39C8a4A545A34339E6eE9f3f0fe12d4B680',
      connections: [
        {
          token:
            'cosmos|xiontestnet1|xion1q8f5ek03yys4uk07p9wq5ztyzf3757uw7d74hdl0440xth4ezzkqv8c6jl',
        },
      ],
      logoURI: '/logos/decentrio.svg',
    },
  ],
  options: {
    interchainFeeConstants: [
      {
        addressOrDenom: 'uxion',
        amount: 100000,
        destination: 'sepolia',
        origin: 'xiontestnet1',
      },
    ],
  },
  // Example collateral token for an EVM chain
  // {
  //   type: 'collateral',
  //   chainId: 5,
  //   address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  //   hypCollateralAddress: '0x145de8760021c4ac6676376691b78038d3DE9097',
  //   name: 'Weth',
  //   symbol: 'WETH',
  //   decimals: 18,
  //   logoURI: '/logos/weth.png', // See public/logos/
  // },

  // Example NFT (ERC721) token for an EVM chain
  // {
  //   chainId: 5,
  //   name: 'Test721',
  //   symbol: 'TEST721',
  //   decimals: 0,
  //   type: 'collateral',
  //   address: '0x77566D540d1E207dFf8DA205ed78750F9a1e7c55',
  //   hypCollateralAddress: '0xDcbc0faAA269Cf649AC8950838664BB7B355BD6B',
  //   isNft: true,
  // },

  //   - chainName: sepolia
  //   standard: EvmHypCollateral
  //   name: Sipher Token
  //   symbol: SIPHER
  //   decimals: 18
  //   addressOrDenom: "0x21b044ceE37B6bd05b923D9f02394C294aE66964"
  //   collateralAddressOrDenom: "0x7f0c2f38d6386268f49501707dd1421fd03353fc"
  //   connections:
  //     - token: ethereum|zircuittestnet|0xa9c12F47836207879Ec1bbec09361DB932Db2f09
  // - chainName: zircuittestnet
  //   standard: EvmHypSynthetic
  //   name: Sipher Token
  //   symbol: SIPHER
  //   decimals: 18
  //   addressOrDenom: "0xa9c12F47836207879Ec1bbec09361DB932Db2f09"
  //   connections:
  //     - token: ethereum|sepolia|0x21b044ceE37B6bd05b923D9f02394C294aE66964

  // // Ethereum USDC to Viction
  // {
  //   type: 'collateral',
  //   chainId: 1,
  //   name: 'USDC',
  //   symbol: 'USDC',
  //   decimals: 18,
  //   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  //   hypCollateralAddress: '0x31Dca7762930f56D81292f85E65c9D67575804fE',
  //   logoURI: '/logos/usdc.svg',
  // },

  // // Ethereum USDT to Viction
  // {
  //   type: 'collateral',
  //   chainId: 1,
  //   name: 'USDT',
  //   symbol: 'USDT',
  //   decimals: 18,
  //   address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  //   hypCollateralAddress: '0x4221a16A01F61c2b38A03C52d828a7041f6AAA49',
  //   logoURI: '/logos/usdt.svg',
  // },
};

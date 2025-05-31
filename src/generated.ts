import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Magna
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const magnaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'collectionName', internalType: 'string', type: 'string' },
      { name: 'collectionSymbol', internalType: 'string', type: 'string' },
      { name: 'tokenURISuffix', internalType: 'string', type: 'string' },
      { name: 'maxMintableSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'globalWalletLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'cosigner', internalType: 'address', type: 'address' },
      {
        name: 'timestampExpirySeconds',
        internalType: 'uint64',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'CannotIncreaseMaxMintableSupply' },
  { type: 'error', inputs: [], name: 'CannotUpdatePermanentBaseURI' },
  { type: 'error', inputs: [], name: 'CosignerNotSet' },
  { type: 'error', inputs: [], name: 'CrossmintAddressNotSet' },
  { type: 'error', inputs: [], name: 'CrossmintOnly' },
  { type: 'error', inputs: [], name: 'GlobalWalletLimitOverflow' },
  { type: 'error', inputs: [], name: 'InsufficientStageTimeGap' },
  { type: 'error', inputs: [], name: 'InvalidCosignSignature' },
  { type: 'error', inputs: [], name: 'InvalidProof' },
  { type: 'error', inputs: [], name: 'InvalidQueryRange' },
  { type: 'error', inputs: [], name: 'InvalidStage' },
  { type: 'error', inputs: [], name: 'InvalidStageArgsLength' },
  { type: 'error', inputs: [], name: 'InvalidStartAndEndTimestamp' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  { type: 'error', inputs: [], name: 'Mintable' },
  { type: 'error', inputs: [], name: 'NoSupplyLeft' },
  { type: 'error', inputs: [], name: 'NotEnoughValue' },
  { type: 'error', inputs: [], name: 'NotMintable' },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorNotAllowed',
  },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  { type: 'error', inputs: [], name: 'StageSupplyExceeded' },
  { type: 'error', inputs: [], name: 'TimestampExpired' },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'WalletGlobalLimitExceeded' },
  { type: 'error', inputs: [], name: 'WalletStageLimitExceeded' },
  { type: 'error', inputs: [], name: 'WithdrawFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ConsecutiveTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'PermanentBaseURI',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'activeStage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetActiveStage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SetBaseURI',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'cosigner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetCosigner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'crossmintAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetCrossmintAddress',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'globalWalletLimit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetGlobalWalletLimit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'maxMintableSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMaxMintableSupply',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'mintable', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'SetMintable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'expiry',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'SetTimestampExpirySeconds',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'stage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'price', internalType: 'uint80', type: 'uint80', indexed: false },
      {
        name: 'walletLimit',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'merkleRoot',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'maxStageSupply',
        internalType: 'uint24',
        type: 'uint24',
        indexed: false,
      },
      {
        name: 'startTimeUnixSeconds',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'endTimeUnixSeconds',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateStage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'minter', internalType: 'address', type: 'address' },
      { name: 'qty', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertValidCosign',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'qty', internalType: 'uint32', type: 'uint32' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'crossmint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'explicitOwnershipOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721A.TokenOwnership',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'explicitOwnershipsOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721A.TokenOwnership[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timestamp', internalType: 'uint64', type: 'uint64' }],
    name: 'getActiveStageFromTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'minter', internalType: 'address', type: 'address' },
      { name: 'qty', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getCosignDigest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'getCosignNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCosigner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCrossmintAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getGlobalWalletLimit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaxMintableSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMintable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumberStages',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getStageInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721M.MintStageInfo',
        type: 'tuple',
        components: [
          { name: 'price', internalType: 'uint80', type: 'uint80' },
          { name: 'walletLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxStageSupply', internalType: 'uint24', type: 'uint24' },
          {
            name: 'startTimeUnixSeconds',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'endTimeUnixSeconds',
            internalType: 'uint64',
            type: 'uint64',
          },
        ],
      },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTimestampExpirySeconds',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenURISuffix',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'qty', internalType: 'uint32', type: 'uint32' },
      { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'qty', internalType: 'uint32', type: 'uint32' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'ownerMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setBaseURIPermanent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cosigner', internalType: 'address', type: 'address' }],
    name: 'setCosigner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'crossmintAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setCrossmintAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'globalWalletLimit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setGlobalWalletLimit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'maxMintableSupply', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMaxMintableSupply',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'mintable', internalType: 'bool', type: 'bool' }],
    name: 'setMintable',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newStages',
        internalType: 'struct IERC721M.MintStageInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'price', internalType: 'uint80', type: 'uint80' },
          { name: 'walletLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxStageSupply', internalType: 'uint24', type: 'uint24' },
          {
            name: 'startTimeUnixSeconds',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'endTimeUnixSeconds',
            internalType: 'uint64',
            type: 'uint64',
          },
        ],
      },
    ],
    name: 'setStages',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'expiry', internalType: 'uint64', type: 'uint64' }],
    name: 'setTimestampExpirySeconds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'suffix', internalType: 'string', type: 'string' }],
    name: 'setTokenURISuffix',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokensOfOwnerIn',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'a', internalType: 'address', type: 'address' }],
    name: 'totalMintedByAddress',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'price', internalType: 'uint80', type: 'uint80' },
      { name: 'walletLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'maxStageSupply', internalType: 'uint24', type: 'uint24' },
      { name: 'startTimeUnixSeconds', internalType: 'uint64', type: 'uint64' },
      { name: 'endTimeUnixSeconds', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'updateStage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const magnaAddress = {
  1: '0xcee3C4F9f52cE89e310F19b363a9d4F796B56A68',
} as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const magnaConfig = { address: magnaAddress, abi: magnaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokeId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagna = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"assertValidCosign"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaAssertValidCosign =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'assertValidCosign',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaExplicitOwnershipOf =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'explicitOwnershipOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaExplicitOwnershipsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'explicitOwnershipsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getActiveStageFromTimestamp"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetActiveStageFromTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getActiveStageFromTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getCosignDigest"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetCosignDigest = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getCosignDigest',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getCosignNonce"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetCosignNonce = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getCosignNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getCosigner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetCosigner = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getCosigner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getCrossmintAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetCrossmintAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getCrossmintAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getGlobalWalletLimit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetGlobalWalletLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getGlobalWalletLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getMaxMintableSupply"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetMaxMintableSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getMaxMintableSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getMintable"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetMintable = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getMintable',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getNumberStages"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetNumberStages = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getNumberStages',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getStageInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetStageInfo = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'getStageInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getTimestampExpirySeconds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetTimestampExpirySeconds =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getTimestampExpirySeconds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"getTokenURISuffix"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaGetTokenUriSuffix =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'getTokenURISuffix',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaIsApprovedForAll = /*#__PURE__*/ createUseReadContract(
  { abi: magnaAbi, address: magnaAddress, functionName: 'isApprovedForAll' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaName = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaOwner = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaSymbol = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"tokensOfOwner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaTokensOfOwner = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaTokensOfOwnerIn = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'tokensOfOwnerIn',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"totalMintedByAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaTotalMintedByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'totalMintedByAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useReadMagnaTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagna = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaApprove = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"crossmint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaCrossmint = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'crossmint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaMint = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"ownerMint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaOwnerMint = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'ownerMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetBaseUri = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setBaseURIPermanent"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetBaseUriPermanent =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setBaseURIPermanent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setCosigner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetCosigner = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'setCosigner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setCrossmintAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetCrossmintAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setCrossmintAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setGlobalWalletLimit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetGlobalWalletLimit =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setGlobalWalletLimit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setMaxMintableSupply"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetMaxMintableSupply =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setMaxMintableSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setMintable"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetMintable = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'setMintable',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setStages"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetStages = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'setStages',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setTimestampExpirySeconds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetTimestampExpirySeconds =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setTimestampExpirySeconds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setTokenURISuffix"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaSetTokenUriSuffix =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setTokenURISuffix',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"updateStage"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaUpdateStage = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'updateStage',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWriteMagnaWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagna = /*#__PURE__*/ createUseSimulateContract({
  abi: magnaAbi,
  address: magnaAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"crossmint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaCrossmint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'crossmint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaMint = /*#__PURE__*/ createUseSimulateContract({
  abi: magnaAbi,
  address: magnaAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"ownerMint"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaOwnerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'ownerMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setBaseURIPermanent"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetBaseUriPermanent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setBaseURIPermanent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setCosigner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetCosigner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setCosigner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setCrossmintAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetCrossmintAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setCrossmintAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setGlobalWalletLimit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetGlobalWalletLimit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setGlobalWalletLimit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setMaxMintableSupply"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetMaxMintableSupply =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setMaxMintableSupply',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setMintable"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetMintable =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setMintable',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setStages"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetStages =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setStages',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setTimestampExpirySeconds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetTimestampExpirySeconds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setTimestampExpirySeconds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"setTokenURISuffix"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaSetTokenUriSuffix =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'setTokenURISuffix',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"updateStage"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaUpdateStage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: magnaAbi,
    address: magnaAddress,
    functionName: 'updateStage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link magnaAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useSimulateMagnaWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: magnaAbi, address: magnaAddress, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: magnaAbi,
  address: magnaAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"PermanentBaseURI"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaPermanentBaseUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'PermanentBaseURI',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetActiveStage"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetActiveStageEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetActiveStage',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetBaseURI"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetBaseUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetBaseURI',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetCosigner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetCosignerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetCosigner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetCrossmintAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetCrossmintAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetCrossmintAddress',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetGlobalWalletLimit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetGlobalWalletLimitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetGlobalWalletLimit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetMaxMintableSupply"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetMaxMintableSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetMaxMintableSupply',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetMintable"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetMintableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetMintable',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"SetTimestampExpirySeconds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaSetTimestampExpirySecondsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'SetTimestampExpirySeconds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"UpdateStage"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaUpdateStageEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'UpdateStage',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link magnaAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcee3c4f9f52ce89e310f19b363a9d4f796b56a68)
 */
export const useWatchMagnaWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: magnaAbi,
    address: magnaAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721TokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

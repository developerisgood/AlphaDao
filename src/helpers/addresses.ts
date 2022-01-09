import { ethers } from 'ethers';
import provider from '@/helpers/provider';

const addresses = {
  4: {
    DAI_ADDRESS: '0xda68f3C5F31A289a4d90927aE54d6b4Ae0b7F1F9',
    OHM_ADDRESS: '0x2CF9A1bCfbf78b7CeE14A91008157BeDbBd00A9f',
    STAKING_ADDRESS: '0x84c8cBAFbeFD329F3e55f7cbFFD1D422d77b7c27',
    SOHM_ADDRESS: '0x4D2AbC161Af2aeED1da1CAf768F4475b25e4C1Db',
    PRESALE_ADDRESS: '0x90d1dd1fa2fddd5076850f342f31717a0556fdf7',
    AOHM_ADDRESS: '0x410D96DF0F9e778d0E3a7B93547e40f06e823618',
    MIGRATE_ADDRESS: '0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2',
    LPSTAKING_ADDRESS: '0x797C6E26D099b971cc95138D55729a58B34c5e6B',
    LP_ADDRESS: '0x366c22dbb3a69025bc2c6216305f047ed5db9192',
    // BOND_ADDRESS: '0xdc1b5DF37369B2D370f141E48d65a28032Be1c58',
    BOND_ADDRESS: '0x50a9dd1f9a13737376395056e9991d4f51a6e958',
    BONDINGCALC_ADDRESS: '0x6d5de2E6f3437b29f8Ffdb9b3f2BADb81B881dBc',
    DAI_BOND_ADDRESS: '0xf0dc88996d55b89ce7c1701ef906527855664f96',
    CIRCULATING_SUPPLY_ADDRESS: '0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868',
  },
  1: {
    DAI_ADDRESS: '0x6b175474e89094c44da98b954eedeac495271d0f',
    OHM_ADDRESS: '0x383518188c0c6d7730d91b2c03a03c837814a899',
    STAKING_ADDRESS: '0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2',
    SOHM_ADDRESS: '0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe',
    PRESALE_ADDRESS: '0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8',
    AOHM_ADDRESS: '0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e',
    MIGRATE_ADDRESS: '0xC7f56EC779cB9e60afA116d73F3708761197dB3d',
    LPSTAKING_ADDRESS: '0xF11f0F078BfaF05a28Eac345Bb84fcb2a3722223',
    LP_ADDRESS: '0x34d7d7Aaf50AD4944B70B320aCB24C95fa2def7c',
    DISTRIBUTOR_ADDRESS: '0xbe731507810C8747C3E01E62c676b1cA6F93242f',
    // BOND_ADDRESS: '0xd27001d1aAEd5f002C722Ad729de88a91239fF29',
    BOND_ADDRESS: '0x13E8484a86327f5882d1340ed0D7643a29548536',
    BONDINGCALC_ADDRESS: '0x6a617Fe9163C1499b9D2773fb2d0105a2368Bedc',
    LP_BONDINGCALC_ADDRESS: '0xe2CABE86071f6Ae31e1b4634BAa06522b838a148',
    DAI_BOND_ADDRESS: '0xa64ED1b66Cb2838Ef2A198D8345c0ce6967A2A3c',
    CIRCULATING_SUPPLY_ADDRESS: '0x0efff9199aa1ac3c3e34e957567c1be8bf295034',
  },
  97: {
    DAI_ADDRESS: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
    OHM_ADDRESS: '0x17708ed9640Fa2A3b0Be047DeC81aCaa31f6FA44',
    STAKING_ADDRESS: '0x7ecA363422608a04Ef37D3A23E0b1f51e48EBE7e',
    SOHM_ADDRESS: '0x2193FAaC1910e002b87589C5d34F1737C1f02Cc0',
    PRESALE_ADDRESS: '0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8',
    AOHM_ADDRESS: '0x2193FAaC1910e002b87589C5d34F1737C1f02Cc0',
    MIGRATE_ADDRESS: '0xC7f56EC779cB9e60afA116d73F3708761197dB3d',
    LPSTAKING_ADDRESS: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    LP_ADDRESS: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    DISTRIBUTOR_ADDRESS: '0x050B24E3282a7a5c8A4a44b46eD4Cd3F0C143f2E',
    // BOND_ADDRESS: '0xd27001d1aAEd5f002C722Ad729de88a91239fF29',
    BOND_ADDRESS: '0x9c0E2603FEF3Acc82Ad291CF8F07ef17f4E12939',
    BONDINGCALC_ADDRESS: '0x39eAEdb3cd2FBC9967540E98E4c44A9DbdE4850f',
    LP_BONDINGCALC_ADDRESS: '0xe2CABE86071f6Ae31e1b4634BAa06522b838a148',
    DAI_BOND_ADDRESS: '0xa64ED1b66Cb2838Ef2A198D8345c0ce6967A2A3c',
    CIRCULATING_SUPPLY_ADDRESS: '0x0efff9199aa1ac3c3e34e957567c1be8bf295034',
  }
};

export default addresses;
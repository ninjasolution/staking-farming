export const MasterChefAddr = "0x2D91ADd4bCDbb90d980D4f526A897ccd7Ad1e237";

export const MeatVaultAddr = "0x56729f679582E844eEaF36D223498355c93FE97D";

export const BitxAddr = "0x169Be05e2EE643c4d0A467BF07f3Ad9f720271D4";

export const UsdtBitxLpAddr = "0x276a843E8e5dD8318B29924172B2426D0dB8699C";

export const BusdBitxLpAddr = "0x7c1F78B88C8DB3143179CB9F2a52C0fE39F3a591";

export const BitxBnbLpAddr = "0x1a74ee9730724F25A364B95f07a32fcaf0377EbC";

export const MulticallAddr = "0x91598056613c69b189Df336c12B11F9C180aFC0d"; //testnet
// export const MulticallAddr = "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c";

export const BUSDAddr = "0x8178427c7B2334522C2D23Eda02f25cF03001C30";

export const USDTAddr = "0x66Ca77F98106585f3A3D8411A2b16E734FbDF841";

export const ETHAddr = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

export const CAKE_PER_YEAR = 12614;

export const TotalAllocPoint = 3000;

export const lpAprs = {
    [UsdtBitxLpAddr]: 5,
    [BusdBitxLpAddr]: 5,
    [BitxBnbLpAddr]: 5,
    [USDTAddr]: 5,
    [BUSDAddr]: 5,
    [BitxAddr]: 5,
}

export const Farms = [
    {
        pid: 1,
        lpSymbol: 'BITX-USDT LP',
        logo: "./img/t.png",
        width: 33,
        lpAddress: UsdtBitxLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 2,
        lpSymbol: 'BUSD-BITX LP',
        logo: "./img/d.png",
        width: 33,
        lpAddress: BusdBitxLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 3,
        lpSymbol: 'BNB-BITX LP',
        logo: "./img/d.png",
        width: 33,
        lpAddress: BitxBnbLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 4,
        lpSymbol: 'BITX',
        logo: "./img/meat_box_frame.png",
        width: 30,
        lpAddress: BitxAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 5,
        lpSymbol: 'USDT',
        logo: "./img/icons/icon1.png",
        width: 25,
        lpAddress: USDTAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 6,
        lpSymbol: 'BUSD',
        logo: "./img/icons/icon2.png",
        width: 25,
        lpAddress: BUSDAddr,
        token: "",
        quoteToken: "",
    }

]

export const backendLink = "http://192.168.104.102:8000";

export const defaultRPC = "https://api.avax-test.network/ext/bc/C/rpc" // https://bsc-dataseed1.ninicoin.io
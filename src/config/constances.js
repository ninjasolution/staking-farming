export const MasterChefAddr = "0x2D91ADd4bCDbb90d980D4f526A897ccd7Ad1e237";

export const MeatVaultAddr = "0x56729f679582E844eEaF36D223498355c93FE97D";

export const BitxAddr = "0x169Be05e2EE643c4d0A467BF07f3Ad9f720271D4";

export const UsdtBitxLpAddr = "0xfD04202CdeAbD9EBda2D4aa7F7569ed23F7ccC3a";

export const BusdBitxLpAddr = "0x898393FD706DC9128f57e7A46DE763840c2Ff393";

export const BitxbusdLpAddr = "0xb1b6e19D5288d98C4c868bb78D241425dC60d5e1";

export const MulticallAddr = "0x91598056613c69b189Df336c12B11F9C180aFC0d"; //testnet
// export const MulticallAddr = "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c";

export const BUSDAddr = "0x8178427c7B2334522C2D23Eda02f25cF03001C30";

export const USDTAddr = "0x66Ca77F98106585f3A3D8411A2b16E734FbDF841";

export const ETHAddr = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

export const CAKE_PER_YEAR = 12614;

export const TotalAllocPoint = 1500;

export const lpAprs = {
    [UsdtBitxLpAddr]: 5,
    [BusdBitxLpAddr]: 5,
    [BitxbusdLpAddr]: 5,
}

export const Farms = [
    {
        pid: 1,
        lpSymbol: 'BITX-USDT LP',
        logo: "./img/t.png",
        lpAddress: "0x276a843E8e5dD8318B29924172B2426D0dB8699C",
        token: "",
        quoteToken: "",
    },
    {
        pid: 2,
        lpSymbol: 'BUSD-BITX LP',
        logo: "./img/d.png",
        lpAddress: "0x7c1F78B88C8DB3143179CB9F2a52C0fE39F3a591",
        token: "",
        quoteToken: "",
    },
    {
        pid: 3,
        lpSymbol: 'BNB-BITX LP',
        logo: "./img/d.png",
        lpAddress: "0x1a74ee9730724F25A364B95f07a32fcaf0377EbC",
        token: "",
        quoteToken: "",
    },
    {
        pid: 4,
        lpSymbol: 'BITX',
        logo: "./img/d.png",
        lpAddress: BitxAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 5,
        lpSymbol: 'USDT',
        logo: "./img/icons/icon1.png",
        lpAddress: USDTAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 6,
        lpSymbol: 'BUSD',
        logo: "./img/icons/icon2.png",
        lpAddress: BUSDAddr,
        token: "",
        quoteToken: "",
    }

]

export const backendLink = "http://192.168.104.102:8000";

export const defaultRPC = "https://api.avax-test.network/ext/bc/C/rpc" // https://bsc-dataseed1.ninicoin.io
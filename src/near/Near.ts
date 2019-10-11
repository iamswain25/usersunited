// import config from "./config";
import * as Nearlib from "nearlib";
import * as NearType from "nearlib/lib/near";
export interface Methods {
  getRangeMessages: (args: { start: number }) => any[];
  hasCommented: (args: { id: string }) => boolean;
  monthCounters: (args: { yearMonth6: string }) => number[];
  getProfile: (args: { id: string }) => any;
}
class NearClass {
  private config = {
    networkId: "default",
    nodeUrl: "https://rpc.nearprotocol.com",
    contractName: "usersunited",
    walletUrl: "https://wallet.nearprotocol.com",
    initialBalance: 100000000
  };
  private Near: NearType.Near | null = null;
  private walletAccount: Nearlib.WalletAccount | null = null;
  private contract: Nearlib.Contract | Methods | null = null;
  public promise: Promise<Methods> = new Promise(res => this.getNear(res));
  // constructor() {
  //   // console.log(Nearlib);
  //   // this.getNear();
  // }
  public methods: Methods = this.contract as Methods;

  private async getNear(res: (value?: Methods) => void) {
    this.Near = await Nearlib.connect(
      Object.assign(
        {
          deps: {
            keyStore: new Nearlib.keyStores.BrowserLocalStorageKeyStore()
          }
        },
        this.config
      )
    );
    this.walletAccount = new Nearlib.WalletAccount(this.Near, null);
    // const account = await this.Near.account(this.walletAccount.getAccountId());
    // this.contract = new Nearlib.Contract(account, this.config.contractName, {
    //   viewMethods: [
    //     "getRangeMessages",
    //     "hasCommented",
    //     "monthCounters",
    //     "getProfile"
    //   ],
    //   changeMethods: ["addMessage"]
    // });
    this.contract = await this.Near.loadContract(this.config.contractName, {
      viewMethods: [
        "getRangeMessages",
        "hasCommented",
        "monthCounters",
        "getProfile"
      ],
      changeMethods: ["addMessage"],
      sender: this.walletAccount.getAccountId()
    });
    res((this.contract as unknown) as Methods);
  }
}

export default new NearClass();

/* from builder-util-runtime/out/ProgressCallbackTransform.d.ts */
interface ProgressInfo {
  total: number;
  delta: number;
  transferred: number;
  percent: number;
  bytesPerSecond: number;
}

type IDapp = {
  // TODO: implement it;
  id?: string;
  alias: string;
  origin: string | `https://${string}${string}`;
  faviconUrl: string;
  faviconBase64?: string;
};

type IDesktopAppState = {
  firstStartApp: boolean;
};

type IDappsDetectResult<T extends string = string> = {
  data: null | {
    urlInfo: Partial<URL> | null;
    origin: string;
    icon: import('@debank/parse-favicon').Icon;
    faviconUrl: string;
    faviconBase64?: string; // base64
  };
  error?: {
    type: T;
    message?: string;
  };
};

type IAppUpdatorCheckResult =
  | {
      hasNewRelease: true;
      releaseVersion: string;
    }
  | {
      hasNewRelease: false;
      releaseVersion: null;
    };

type IAppUpdatorDownloadProgress =
  | {
      progress: ProgressInfo;
      isEnd: false;
    }
  | {
      progress: null;
      isEnd: true;
    };

type IConnectedSiteToDisplay = {
  origin: string;
  isConnected: boolean;
  chainId: `0x${number}`;
  chainName: string;
};

type IConnectedSiteInfo = {
  chain: string;
  icon: string;
  isConnected: boolean;
  isSigned: boolean;
  isTop: boolean;
  name: string;
  origin: string;
};

type IDappUpdateDetectionItem = {
  dapp_id: string;
  version: string;
  is_changed: boolean;
  new_detected_address_list: string[];
  create_at: number;
};

type ISecurityCheckResult = {
  origin: string;
  countWarnings: number;
  countIssues: number;
  countDangerIssues: number;
  resultLevel: 'ok' | 'warning' | 'danger';
  timeout: boolean;
  checkHttps: {
    level: ISecurityCheckResult['resultLevel'];
    timeout?: boolean;
    httpsError: boolean;
    chromeErrorCode?: string;
  };
  checkLatestUpdate: {
    level: ISecurityCheckResult['resultLevel'];
    timeout?: boolean;
    latestChangedItemIn24Hr?: IDappUpdateDetectionItem | null;
    latestItem?: IDappUpdateDetectionItem | null;
    error?: string;
  };
};

type ISecurityNotificationPayload =
  | {
      type: 'full-web3-addr';
      web3Addr: string;
    }
  | {
      type: 'full-web3-addr-changed' | 'full-web3-addr-quick-changed';
      prevAddr: string;
      curAddr: string;
    }
  | {
      type: 'text-with-ens';
      ensDomain: string;
    };

type IFocusedDetailedType = 'checkHttps' | 'checkLatestUpdate';
type ISecurityAddrbarPopupState =
  | {
      page: 'entry';
    }
  | {
      page: 'detail-item';
      focusingItem: IFocusedDetailedType;
    };

type IRabbyxRpcQuery = {
  rpcId: string;
  method: string;
  params: any[];
};

type IRabbyxRpcResponse = {
  rpcId: string;
  result: any | null;
  error?: Error;
};

type IContextMenuPageInfo = {
  type: 'sidebar-dapp';
  dappTabInfo: chrome.tabs.Tab;
};

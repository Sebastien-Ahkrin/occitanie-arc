import axios, { AxiosResponse } from "axios";

interface InternalClassementProxy {
  protocol: "http" | "https";
  host: string;
  port: number;
}

class ClassementProxy {
  private proxy: InternalClassementProxy;

  public constructor(protocol: "http" | "https", host: string, port: number) {
    this.proxy = {
      host,
      protocol,
      port,
    };
  }

  public async get(request: string) {
    const { protocol, host, port } = this.proxy;

    const { data } = await axios.get<AxiosResponse<string>>(
      `${protocol}://${host}:${port}/api/${request}`
    );

    return data;
  }
}

// url of my proxy (run it with npm run proxy)
export default new ClassementProxy("http", "localhost", 3001);

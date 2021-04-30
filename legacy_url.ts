import { URL } from "https://cdn.deno.land/std/versions/0.95.0/raw/node/url.ts";

export default {
  format: function ({
    protocol = "https",
    hostname,
    port,
    pathname = "",
    query = {},
  }: {
    protocol: string;
    hostname: string;
    port?: string | null;
    pathname?: string;
    query?: Record<string, string | number | boolean>;
  }) {
    const _url = new URL("");
    _url.protocol = protocol;
    _url.hostname = hostname;
    _url.pathname = pathname;
    if (port) {
      _url.port = port;
    }

    for (const key in query) {
      _url.searchParams.set(key, query[key].toString());
    }

    return _url.toString();
  },
};

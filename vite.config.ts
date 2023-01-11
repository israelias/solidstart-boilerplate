// @ts-ignore
import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  /**
   * Use vercel adapter to deploy to vercel
   * @see {@link https://github.com/vercel/vercel/tree/main/examples/solidstart solidstart}
   *
   * Additional options on how use edge runtime over node
   * @see {@link https://github.com/solidjs/solid-start/tree/main/packages/start-vercel start-vercel}
   */
  plugins: [solid({ adapter: vercel() })],
});

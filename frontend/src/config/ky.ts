import ky from "ky";

export const api = ky.create({
  mode: "cors",
  prefixUrl: "http://localhost:8080/",
  hooks: {
    afterResponse: [
      async (_req, _opts, res) => {
        if (res.status >= 300 && res.status <= 500) {
          const body = await res.json();
          const message = body.message || "Unknown error";
          throw new Error(message);
        }

        return new Response(res.body, { status: res.status });
      },
    ],
  },
});

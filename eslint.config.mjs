import next from "eslint-config-next/core-web-vitals";

const eslintConfig = [...next, { ignores: [".next/**"] }];

export default eslintConfig;

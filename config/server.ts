export default ({ env }) => {
  console.log("APP_KEYS:", env.array('APP_KEYS'));
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: ["wMrSai6xTc2fSkGXqWXZNQ==","Y1wOZdSEXB3ZNPBlbZGA5g==","fcMnNUnTFOfAhKiQcmgjCQ==","HLhNxqaYGJnG2CZKiOKp2g=="],
    },
  };
};
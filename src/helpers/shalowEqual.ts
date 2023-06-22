type Params = {
  a: Record<string, unknown>;
  b: Record<string, unknown>;
};

const shallowEqual = ({ a, b }: Params) =>
  Object.entries(a).sort().toString() === Object.entries(b).sort().toString();

export default shallowEqual;

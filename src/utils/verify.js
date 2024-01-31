import _ from "lodash";

export function verify(value) {
  if (_.isUndefined(value)) return true;
  else if (_.isArray(value) && _.isEmpty(value)) return true;
  else if (value === "") return true;
  return false;
}

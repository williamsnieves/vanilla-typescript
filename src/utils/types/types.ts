export type JSONPrimitive = string | number | boolean | null;
export type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

export default JSONValue;

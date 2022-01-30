export type JSONPrimitive = string | number | boolean | null;
export type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

export type productObject = {
  itemId: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  color: string;
};

export default JSONValue;

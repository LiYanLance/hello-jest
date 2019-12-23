import capitalize from "./helper";

function adapter(str){
  return capitalize(str.trim())
}

export default adapter

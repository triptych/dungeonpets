// https://observablehq.com/@triptych/dungeon-pets@3
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Dungeon Pets`
)});
  return main;
}

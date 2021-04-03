// https://observablehq.com/@triptych/dungeon-pets@6
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Dungeon Pets`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Dungeon Pets is a small pet sim meets dungeon crawler. Find little monsters, raise them up, give them homes they like ( Dungeons! ) and have fun! `
)});
  return main;
}

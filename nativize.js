export const check = async () => {
  // check if meson is installed
  // check if everything is is installed
};
export const prepare = async () => {
};
export const build = async () => {
  //setup builddir
  await new Deno.Command("meson", {
    args: ["setup", "--reconfigure", "builddir"],
    cwd: import.meta.dirname,
  }).spawn().status;
  //compile
  await new Deno.Command("meson", {
    args: ["compile", "-C", "builddir"],
    cwd: import.meta.dirname,
  }).spawn().status;
};
export const run = async () => {
  await new Deno.Command(`${import.meta.dirname}/builddir/nativize`).spawn()
    .status;
};
export const clean = async () => {
  await new Deno.Command("meson", {
    args: ["compile", "--clean", "-C", "builddir"],
    cwd: import.meta.dirname,
  }).spawn().status;
};

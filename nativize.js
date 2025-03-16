export const check = async () => {
  // check if meson is installed
  // check if everything is is installed
};
export const prepare = async () => {
};

export const build = async ({ url }) => {
  //setup builddir
  await new Deno.Command("meson", {
    args: ["setup", "--reconfigure", "builddir", "-Dnativize_url=" + url],
    cwd: import.meta.dirname,
  })
    .spawn()
    .status
    .then(({ success }) => {
      if (!success) {
        throw Error(`meson setup --reconfigure builddir -Dnativize_url=${url}`);
      }
    });

  //compile
  await new Deno.Command("meson", {
    args: ["compile", "-C", "builddir"],
    cwd: import.meta.dirname,
  })
    .spawn()
    .status
    .then(({ success }) => {
      if (!success) {
        throw Error(`meson compile -C builddir`);
      }
    });
};

export const run = async () => {
  await new Deno.Command(`${import.meta.dirname}/builddir/nativize`)
    .spawn()
    .status
    .then(({ success }) => {
      if (!success) {
        throw Error(`${import.meta.dirname}/builddir/nativize`);
      }
    });
};

export const clean = async () => {
  await new Deno.Command("meson", {
    args: ["compile", "--clean", "-C", "builddir"],
    cwd: import.meta.dirname,
  })
    .spawn()
    .status
    .then(({ success }) => {
      if (!success) {
        throw Error(`meson compile --clean -C builddir`);
      }
    });
};

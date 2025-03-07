project('nativize-webkitgtk', 'c', meson_version : '>=1.1')

nativize_url = get_option('nativize_url')


executable('nativize', 'main.c', dependencies : [
  dependency('gtk4'),
  dependency('webkitgtk-6.0'),
], c_args : ['-DNATIVIZE_URL="' + nativize_url + '"'])

# docker-images-clean

[![Downloads](https://badgen.net/npm/dt/docker-images-clean)](https://www.npmjs.com/package/docker-images-clean)
[![Downloads](https://badgen.net/npm/dt/docker-images-clean)](https://www.npmjs.com/package/docker-images-clean)

A terminal tools for clean docker images quickly

## The Reason

The reason why i write this tool is when i build my project many times, these images take up a lot of space on my computer, some times one of project image is a little large, maybe 350Mb, image this, how was there has the number of 20? yes, these take up 7Gb of space on my computer, i can't stand the situation like this.

Every time i want to clean my docker images, i just want to clean those who was build based on some basis docker images, such as my node.js project image base on node.js alpine images, i dont' want to clean node.js alpine, so i must clean images by its image id or regestry:tag, i think it's very silly, so i write this tool just want to be easily to clean docker images i want.

## Install

```console
$ npm install -g docker-images-clean
```

## Usage

Make sure you have installed this package on your pc with global

```console
$ dic
? Sure to clean docker images? (articH)
  a) Clean all images on your disk.
  r) figure out registry
  t) figure out registry and tag
  i) figure out image id
   ──────────────
  c) Abort
  h) Help, list all options
  Answer:
```

If we input i:

```console
? What's the image id ?
```

Input docker image id:

```console
? What's the image id ? fa9504181cbd

Deleted: sha256:3e11f1544469e3bcd4771654323583c45136bea112d633e009eb0bf7ad6a819c
Deleted: sha256:a0612d03b1ef0f6a572765ad5e86709251dbde6a3dd6b9829b2ce9268ebb4e1d
Deleted: sha256:bf9c9879fb488d107b114464ac36cb534ebd313d0e8ab05e1003db6265ecddb7
Deleted: sha256:51763ade91fcea07bc03f02006cc094c954a04b7fd6a9a37c8aef5d10ed5939f
Deleted: sha256:6c5e6b2e578e18c86deb734c67065adf322adec7b5593601d03d5aff8d82b2b2
Deleted: sha256:9ca1a3f08946fca22390885eee5d5a079b76349818646328fc270d760de31d64
Deleted: sha256:5aafafcf899267621903ab25bad13787f332a8d893728296ded08646390fa060
Deleted: sha256:f4b1d45cb3131cda2dc18335a7bf254cdfd6d0361d6bdafe1d2e9c6b3f9b59c0
Deleted: sha256:4f358abc1c59f12aa76c20b440437bf0d920d2f80e687a7b335313e429e5a885
Deleted: sha256:32986834acb6fe29c01fe820364289e56497c27bf71957874cbfd82c8184e78e
Deleted: sha256:ea2629cc6ac8ea64bed9a5cc984ae214d82b1b7521963f2685aed5ffba8df26b
Deleted: sha256:ce0a350610c7795e81b6dc58aebd24c9006adc7ffc62148db5b388a607e74df9
```

Now the id which is fa9504181cbd has been deleted.

[![asciicast](https://asciinema.org/a/XTUlEi64Tbn6o6FBKC9YU7JoZ.svg)](https://asciinema.org/a/XTUlEi64Tbn6o6FBKC9YU7JoZ)

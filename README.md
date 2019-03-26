# docker-images-clean

A terminal tools for clean docker images quickly

## The Reason

The reason why i write this tool is when i build my project many times, these images take up a lot of space on my computer, some times one of project image is a little large, maybe 350Mb, image this, how was there has the number of 20? yes, these take up 7Gb of space on my computer, i can't stand the situation like this.

Every time i want to clean my docker images, i just want to clean those who was build based on some basis docker images, such as my node.js project image base on node.js alpine images, i dont' want to clean node.js alpine, so i must clean images by its image id or regestry:tag, i think it's very silly, so i write this tool just want to be easily to clean docker images i want.

## How to use

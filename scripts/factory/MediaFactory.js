class MediaFactory {
  constructor(media) {
    if (media.type === "image") {
      return new Photo(media);
    } else if (media.type === "video") {
      return new Video(media);
    } else {
      throw "Format non reconnu !";
    }
  }
}
